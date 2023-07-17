import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Calendar, CalendarOptions, EventClickArg, EventInput } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.component.html',
  styleUrls: ['./calendario.component.scss']
})
export class CalendarioComponent implements OnInit {
  modalRef?: BsModalRef;
  nuevoEvento: EventInput;
  formEvento: FormGroup;
  eventos: any[] = [
    {
      id: '1',
      title: 'Clase de Frontend',
      date: '2023-07-11',
      color: '0000FF',
    },
    {
      id: '2',
      title: 'Desayuno 🥞',
      date: '2023-07-15',
      color: '0098FF',
    },
    {
      id: '3',
      title: 'Birthday - Angie Velazco',
      date: '2023-07-12',
      color: '0098FF',
    },
    {
      id: '4',
      title: 'Compra de Switch',
      date: '2023-07-20',
      color: '0098FF',
    },
    {
      id: '5',
      title: 'Aprender Algo de Despliegue',
      start: new Date().setDate(new Date().getDate() + 5),
      end: new Date().setDate(new Date().getDate() + 8),
      class: 'bg-warning text-white'
    }
  ];
  //!
  formEditEvento!: FormGroup;
  editEvent: any;
  calandarEvents!: EventInput[];

  calendarOptions: CalendarOptions = {
    plugins: [dayGridPlugin],
    initialView: "dayGridMonth",
    events: this.eventos,
    dateClick: this.openModal.bind(this),
    eventClick: this.handleEventClick.bind(this)
  };

  openModal(event: EventInput) {
    this.nuevoEvento = event;
    this.modalRef = this.modalService.show(this.templateNuevo, this.config);
  }

  @ViewChild('templateNuevo') templateNuevo!: string;
  @ViewChild('templateEditar') templateEditar!: string;
  config = {
    animated: true
  }
  constructor(private modalService: BsModalService, private fb: FormBuilder) { }

  ngOnInit(): void {

    this.formEvento = this.fb.group({
      title: ['', [Validators.required]]
    })

    this.formEditEvento = this.fb.group({
      title: ['', [Validators.required]]
    })

    this.actualizar();

  }


  guardarEvent() {
    if (this.formEvento.valid) {
      const title = this.formEvento.get('title')!.value;
      const calendar: Calendar = this.nuevoEvento["view"].calendar;
      calendar.addEvent({
        id: '4',
        title: title,
        start: this.nuevoEvento.date,
        end: this.nuevoEvento.date,
        className: 'bg-success text-white'
      })


      this.formEvento = this.fb.group({
        title: ''
      })

    }

    this.closeEventModal();
    this.modalRef?.hide;
  }

  closeEventModal() {
    this.formEvento = this.fb.group({
      title: ''
    })
  }

  handleEventClick(datos: EventClickArg) {
    this.editEvent = datos.event;
    this.formEditEvento = this.fb.group({
      title: `${datos.event.title}`,
    })

    this.modalRef = this.modalService.show(this.templateEditar, this.config)
  }


  actualizar() {
    this.calandarEvents = this.eventos;
  }

  guardarEdicion() {
    const editTitle = this.formEditEvento.get('title')!.value;
    console.log(editTitle)
    const editId = this.calandarEvents.findIndex(
      (x) => {
        x.id + '' === this.editEvent.id + ''
      }
    )


    this.editEvent.setProp('title', editTitle)

    this.calandarEvents[editId] = {
      ...this.editEvent,
      title: editTitle,
      id: this.editEvent.id,
      classNames: 'bg-success text-white'
    }

    this.formEditEvento = this.fb.group({
      editTitle: '',
      editCategory: ''
    })

    this.modalRef?.hide();

  }

  confirm() {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {

        this.deleteEventData();

        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
    })
  }

  deleteEventData() {
    this.editEvent.remove();
    this.modalRef?.hide();
  }



}
