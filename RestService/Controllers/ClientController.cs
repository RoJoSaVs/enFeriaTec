using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using System.Linq;
using Models;
using Newtonsoft.Json;
// using System.Web.Http;
// using System.Web.Http.Cors;

namespace Controllers{
    [Route("api/clients")]
    public class ClientsController{

        //Obtiene los datos del archivo Json que contiene los datos de los clientes
        //y los muestra en una direccion url local para que el frontend obtenga los datos 
        [HttpGet]
        public IEnumerable<Clients> ListAllClients(){
            int size = getSize();
            Clients[] clients = new Clients[size];
            string json = System.IO.File.ReadAllText(@"./JsonDataBase/clients.json");
            dynamic array = JsonConvert.DeserializeObject(json);
            for(int index = 0; index < size; index++){
                Clients client = JsonConvert.DeserializeObject<Clients>(array[index].ToString());
                clients[index] = client;
            }
            return clients;
        }

        //Obtiene la longitud de los objetos que contiene el archivo Json y lo retorna
        public int getSize(){
            string json = System.IO.File.ReadAllText(@"./JsonDataBase/clients.json");
            dynamic array = JsonConvert.DeserializeObject(json);
            return array.Count;
        }
    }
}
