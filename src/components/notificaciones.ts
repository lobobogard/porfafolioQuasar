import { Notify } from 'quasar'

export function Notificacion (mensaje: string, color: string) {
  Notify.create({
    message: mensaje,
    color: color
  })
}
