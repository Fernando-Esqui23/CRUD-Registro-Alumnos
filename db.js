var db;

const funcdb = () => {
    let indexDB = indexedDB.open('db_sistema', 1);
    indexDB.onupgradeneeded = e => {
        let req = e.target.result,
            tblAlumnos = req.createObjectStore('alumnos', { keyPath: 'idAlumno' });
        tblAlumnos.createIndex('idAlumno', 'idAlumno', { unique: true });
    };
    indexDB.onsuccess = e => {
        db = e.target.result;
    };
    indexDB.onerror = e => {
        console.error('Error al crear la base de datos', e.message());
    };
};

funcdb();

const abrirStore = (store, modo) => {
    let ltx = db.transaction(store, modo);
    return ltx.objectStore(store);
};
