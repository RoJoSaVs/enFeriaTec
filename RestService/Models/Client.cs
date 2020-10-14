namespace Models{
    public class Clients{
        public int id {get; set;}           // Número Cédula
        public string name {get; set;}      // Nombre
        public string lastName {get; set;}  // Apellidos
        public string address {get; set;}   // Dirección (Provincia, Cantón, Distrito deben estar por defecto)
        public string birth {get; set;}  // Fecha de nacimiento
        public int phone {get; set;}        // Teléfono
        public string userName {get; set;}  // Usuario
        public int password {get; set;}     // Contraseña
    }   
}