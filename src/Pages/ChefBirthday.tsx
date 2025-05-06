import dayjs from "dayjs";
import { useEffect, useState } from "react";

const ChefBirthday = () => {
  
  async function fetchJson(url: string) :Promise<void> {
    return fetch(url)
      .then((response) => response.json())
      .catch((error) => {
        throw new Error("Errore nella richiesta API: " + error.message);
      });
  }
  
  async function getChefBirthday(id: number): Promise<string | undefined> {
    let recipe:unknown;
    let user:unknown;
    try {
      recipe = await fetchJson(`https://dummyjson.com/recipes/${id}`)
    } catch (error) {
      console.error(error)
    }
    if (recipe && typeof recipe === "object" && "message" in recipe && typeof recipe.message === "string") {
      throw new Error(recipe.message)
    } else if (!recipe) {
      throw new Error("Ricetta non trovata")
    }
    try {
      if (recipe && typeof recipe === "object" && "userId" in recipe && typeof recipe.userId === "number"){
        user = await fetchJson(`https://dummyjson.com/users/${recipe.userId}`)
        if (!user) {
          throw new Error("Utente non trovato")
        }
        if (user && typeof user === "object" && "birthDate" in user && typeof user.birthDate === "string") {
          return user.birthDate
        }
      }
    } catch (error) {
      console.error(error)
      return undefined
    } finally {
      console.log("Richieste completate")
    }
  }
  
  const [birthdayDate, setBirthdayDate] = useState<string | null>(null);
  const [birthday_DayJS, setBirthday_DayJS] = useState<string | null>(null)
  useEffect(() => {
    getChefBirthday(1)
      .then(date => setBirthdayDate(date || null))
      .catch(error => console.error("Errore:", error.message));
    getChefBirthday(1)
      .then(date => setBirthday_DayJS(dayjs(date).format("DD/MM/YYYY")))
      .catch(error => console.error("Errore:", error.message));
  }, []);

  return (
    <div className="text-center pt-5">
      <h1 className="text-2xl font-bold">Compleanno dello chef</h1>

      <p className="pt-4">Data di nascita dello chef:</p>
      <p className="font-bold">{birthdayDate || "Caricamento in corso..."}</p>

      <p className="pt-4">Data di nascita dello chef (Usando DayJS):</p>
      <p className="font-bold">{birthday_DayJS || "Caricamento in corso..."}</p>
    </div>
  )
}

export default ChefBirthday