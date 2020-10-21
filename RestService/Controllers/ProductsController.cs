using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using System.Linq;
using Models;
using Newtonsoft.Json;
// using System.Web.Http;
// using System.Web.Http.Cors;

namespace Controllers{
    [Route("api/products")]
    public class ProductsController{

        //Obtiene los datos del archivo Json que contiene los datos de los porductos
        //y los muestra en una direccion url local para que el frontend obtenga los datos 
        [HttpGet]
        public IEnumerable<Products> ListAllProducts(){
            int size = getSize();
            Products[] products = new Products[size];
            string json = System.IO.File.ReadAllText(@"./JsonDataBase/products.json");
            dynamic array = JsonConvert.DeserializeObject(json);
            for(int index = 0; index < size; index++){
                Products product = JsonConvert.DeserializeObject<Products>(array[index].ToString());
                products[index] = product;
            }
            return products;
        }

        //Obtiene la longitud de los objetos que contiene el archivo Json y lo retorna
        public int getSize(){
            string json = System.IO.File.ReadAllText(@"./JsonDataBase/products.json");
            dynamic array = JsonConvert.DeserializeObject(json);
            return array.Count;
        }
    }
}