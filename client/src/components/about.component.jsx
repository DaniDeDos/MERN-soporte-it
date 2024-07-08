import React, { useState } from 'react';

const SolicitudForm = () => {
  const [nombre, setNombre] = useState('');
  const [cargo, setCargo] = useState('');
  const [direccion, setDireccion] = useState('');
  const [departamento, setDepartamento] = useState('');
  const [tipoPersonal, setTipoPersonal] = useState({
    dirigente: false,
    especialista: false,
    tecnico: false,
    otro: false
  });
  const [telExt, setTelExt] = useState('');
  const [correoLocal, setCorreoLocal] = useState(false);
  const [correoNacional, setCorreoNacional] = useState(false);
  const [correoInternacional, setCorreoInternacional] = useState(false);
  const [navegacionWebNacional, setNavegacionWebNacional] = useState(false);
  const [navegacionWebInternet, setNavegacionWebInternet] = useState(false);
  const [privilegiosUsuario, setPrivilegiosUsuario] = useState({
    adminRed: false,
    adminLocalPc: false,
    usuarioAvanzado: false
  });
  const [aplicaciones, setAplicaciones] = useState({
    odoo: false,
    siscont5: false
  });
  const [horarioUso, setHorarioUso] = useState('');
  const [usuario, setUsuario] = useState('');
  const [tipoCuenta, setTipoCuenta] = useState('Permanente');
  const [fecha, setFecha] = useState('');
  const [firma, setFirma] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes realizar la lógica para enviar la solicitud
    console.log('Solicitud enviada');
  };

  return (
    <div>
      <h2>SOLICITUD CUENTAS DE USUARIOS Y SERVICIOS DE RED</h2>
      <form onSubmit={handleSubmit}>
        <label>Nombre y Apellidos:</label>
        <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />

        <label>Cargo que Ocupa:</label>
        <input type="text" value={cargo} onChange={(e) => setCargo(e.target.value)} />

        <label>Dirección / UEB:</label>
        <input type="text" value={direccion} onChange={(e) => setDireccion(e.target.value)} />

        <label>Departamento / Área:</label>
        <input type="text" value={departamento} onChange={(e) => setDepartamento(e.target.value)} />

        <label>TIPO DE PERSONAL:</label>
        <input
          type="checkbox"
          checked={tipoPersonal.dirigente}
          onChange={(e) => setTipoPersonal({ ...tipoPersonal, dirigente: e.target.checked })}
        />
        <label>Dirigente</label>

        <input
          type="checkbox"
          checked={tipoPersonal.especialista}
          onChange={(e) => setTipoPersonal({ ...tipoPersonal, especialista: e.target.checked })}
        />
        <label>Especialista</label>

        <input
          type="checkbox"
          checked={tipoPersonal.tecnico}
          onChange={(e) => setTipoPersonal({ ...tipoPersonal, tecnico: e.target.checked })}
        />
        <label>Técnico</label>

        <input
          type="checkbox"
          checked={tipoPersonal.otro}
          onChange={(e) => setTipoPersonal({ ...tipoPersonal, otro: e.target.checked })}
        />
        <label>Otro</label>

        <label>Tel. Ext:</label>
        <input type="text" value={telExt} onChange={(e) => setTelExt(e.target.value)} />

        <label>CORREO ELECTRONICO:</label>
        <input
          type="checkbox"
          checked={correoLocal}
          onChange={(e) => setCorreoLocal(e.target.checked)}
        />
        <label>Local</label>

        <input
          type="checkbox"
          checked={correoNacional}
          onChange={(e) => setCorreoNacional(e.target.checked)}
        />
        <label>Nacional</label>

        <input
          type="checkbox"
          checked={correoInternacional}
          onChange={(e) => setCorreoInternacional(e.target.checked)}
        />
        <label>Internacional</label>

        <label>NAVEGACIÓN WEB:</label>
        <input
          type="checkbox"
          checked={navegacionWebNacional}
          onChange={(e) => setNavegacionWebNacional(e.target.checked)}
       />
        <label>Nacional</label>

        <input
          type="checkbox"
          checked={navegacionWebInternet}
          onChange={(e) => setNavegacionWebInternet(e.target.checked)}
        />
        <label>Internet</label>

        <label>PRIVILEGIOS DEL USUARIO:</label>
        <input
          type="checkbox"
          checked={privilegiosUsuario.adminRed}
          onChange={(e) => setPrivilegiosUsuario({ ...privilegiosUsuario, adminRed: e.target.checked })}
        />
        <label>Administrador de RED</label>

        <input
          type="checkbox"
          checked={privilegiosUsuario.adminLocalPc}
          onChange={(e) =>
            setPrivilegiosUsuario({ ...privilegiosUsuario, adminLocalPc: e.target.checked })
          }
        />
        <label>Administrador Local de la PC</label>

        <input
          type="checkbox"
          checked={privilegiosUsuario.usuarioAvanzado}
          onChange={(e) =>
            setPrivilegiosUsuario({ ...privilegiosUsuario, usuarioAvanzado: e.target.checked })
          }
        />
        <label>Usuario Avanzado</label>

        <label>APLICACIONES:</label>
        <input
          type="checkbox"
          checked={aplicaciones.odoo}
          onChange={(e) => setAplicaciones({ ...aplicaciones, odoo: e.target.checked })}
        />
        <label>ODOO</label>

        <input
          type="checkbox"
          checked={aplicaciones.siscont5}
          onChange={(e) => setAplicaciones({ ...aplicaciones, siscont5: e.target.checked })}
        />
        <label>SISCONT 5</label>

        <label>HORARIO DE USO DE LA CUENTA:</label>
        <input type="text" value={horarioUso} onChange={(e) => setHorarioUso(e.target.value)} />

        <label>Usuario:</label>
        <input type="text" value={usuario} onChange={(e) => setUsuario(e.target.value)} />

        <label>Tipo de Cuenta:</label>
        <input
          type="radio"
          value="Temp."
          checked={tipoCuenta === 'Temp.'}
          onChange={() => setTipoCuenta('Temp.')}
        />
        <label>Hasta:</label>
        <input type="text" />
        <input
          type="radio"
          value="Permanente"
          checked={tipoCuenta === 'Permanente'}
          onChange={() => setTipoCuenta('Permanente')}
        />
        <label>Permanente</label>

        <label>SOLICITADO POR (Directivo que solicita el Servicio):</label>
        <label>Nombres y Apellidos:</label>
        <input type="text" />
        <label>CARGO:</label>
        <input type="text" />
        <label>Fecha:</label>
        <input type="text" />
        <label>Firma:</label>
        <input type="text" />

        <label>REVISADO POR:</label>
        <label>Nombres y Apellidos:</label>
        <input type="text" />
        <label>CARGO:</label>
        <input type="text" />
        <label>Fecha:</label>
        <input type="text" />
        <label>Firma:</label>
        <input type="text" />

        <label>APROBADO POR: (Directivo que autoriza el Servicio)</label>
        <label>Nombres y Apellidos:</label>
        <input type="text" />
        <label>CARGO:</label>
        <input type="text" />
        <label>Fecha:</label>
        <input type="text" />
        <label>Firma:</label>
        <input type="text" />

        <label>EJECUTADO POR: (Especialista que implementa los servicios)</label>
        <label>Nombres y Apellidos:</label>
        <input type="text" />
        <label>CARGO:</label>
        <input type="text" />
        <label>Fecha:</label>
        <input type="text" />
        <label>Firma:</label>
        <input type="text" />

        <label>Baja</label>
        <input type="checkbox" />
        <label>Motivos:</label>
        <input type="text" />
        <label>Fecha:</label>
        <input type="text" />
        <label>Firma:</label>
        <input type="text" />

        <button type="submit">Enviar Solicitud</button>
      </form>
    </div>
  );
};

export default SolicitudForm