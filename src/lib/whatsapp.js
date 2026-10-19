export function getWhatsAppUrl(message = 'Olá, gostaria de conversar sobre um projeto com a Lana Dev Studio.') {
  return `https://wa.me/5521979337632?text=${encodeURIComponent(message)}`;
}
