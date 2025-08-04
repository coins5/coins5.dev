export function startTiempoDesdeNacimiento(
  fechaNacimiento: Date,
  onUpdate: (datos: {
    segundos: string;
    minutos: string;
    horas: number;
    hhmmss: string;
    ddhhmmss: string;
    mmddThhmmss: string;
    yymmddThhmmss: string;
  }) => void
) {
  function pad(num: number): string {
    return num.toString().padStart(2, '0');
  }

  function formatearMiles(n: number): string {
    return n.toLocaleString("en-US");
  }

  function actualizar() {
    const ahora = new Date();
    const diffMs = ahora.getTime() - fechaNacimiento.getTime();
    const diffSec = Math.floor(diffMs / 1000);
    const diffMin = Math.floor(diffSec / 60);
    const diffHrs = Math.floor(diffMin / 60);
    const diffDays = Math.floor(diffHrs / 24);

    const hrs = diffHrs % 24;
    const mins = diffMin % 60;
    const secs = diffSec % 60;
    const hhmmss = `${pad(diffHrs)}:${pad(mins)}:${pad(secs)}`;
    const ddhhmmss = `${pad(diffDays)} días ${pad(hrs)}:${pad(mins)}:${pad(secs)}`;

    let temp = new Date(fechaNacimiento);
    let meses = 0;
    while (temp <= ahora) {
      temp.setMonth(temp.getMonth() + 1);
      if (temp <= ahora) meses++;
    }

    temp = new Date(fechaNacimiento);
    temp.setMonth(temp.getMonth() + meses);
    const restoMs = ahora.getTime() - temp.getTime();
    const restoHrs = Math.floor(restoMs / (1000 * 60 * 60));
    const restoMins = Math.floor((restoMs % (1000 * 60 * 60)) / (1000 * 60));
    const restoSecs = Math.floor((restoMs % (1000 * 60)) / 1000);
    const diasMes = Math.floor(restoMs / (1000 * 60 * 60 * 24));
    const mmddThhmmss = `${pad(meses)} meses ${pad(diasMes)} días y ${pad(hrs)}:${pad(restoMins)}:${pad(restoSecs)}`;

    let temp2 = new Date(fechaNacimiento);
    let anios = 0;
    while (temp2 <= ahora) {
      temp2.setFullYear(temp2.getFullYear() + 1);
      if (temp2 <= ahora) anios++;
    }

    temp2 = new Date(fechaNacimiento);
    temp2.setFullYear(temp2.getFullYear() + anios);
    let mesesRestantes = 0;
    while (temp2 <= ahora) {
      temp2.setMonth(temp2.getMonth() + 1);
      if (temp2 <= ahora) mesesRestantes++;
    }

    temp2 = new Date(fechaNacimiento);
    temp2.setFullYear(temp2.getFullYear() + anios);
    temp2.setMonth(temp2.getMonth() + mesesRestantes);
    const diffFinalMs = ahora.getTime() - temp2.getTime();
    const diasRestantes = Math.floor(diffFinalMs / (1000 * 60 * 60 * 24));
    const horasFinal = Math.floor((diffFinalMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutosFinal = Math.floor((diffFinalMs % (1000 * 60 * 60)) / (1000 * 60));
    const segundosFinal = Math.floor((diffFinalMs % (1000 * 60)) / 1000);
    const yymmddThhmmss = `${pad(anios)} years ${pad(mesesRestantes)} meses ${pad(diasRestantes)} dias y ${pad(horasFinal)}:${pad(minutosFinal)}:${pad(segundosFinal)}`;

    onUpdate({
      segundos: formatearMiles(diffSec),
      minutos: formatearMiles(diffMin),
      horas: diffHrs,
      hhmmss,
      ddhhmmss,
      mmddThhmmss,
      yymmddThhmmss
    });
  }

  actualizar();
  const interval = setInterval(actualizar, 1000);
  return () => clearInterval(interval);
}
