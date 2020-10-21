using System;

namespace Models{
    public class Products{
        public string name {get; set;}     // Nombre
        public string category {get; set;} // Categoria
        public string picture {get; set;}  // Foto del producto
        public int cost {get; set;}        // Precio
        public string sellMode {get; set;} // Modo de venta (por kilo, paquete, caja, entre otros)
        public int amount {get; set;}      // Disponibilidad de producto
    }
}