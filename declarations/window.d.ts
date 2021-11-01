import { MercadoPago } from './MercadoPago'

export declare global {
  interface Window {
    MercadoPago: MercadoPago
    MP_DEVICE_SESSION_ID: any
  }
}
