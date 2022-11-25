const apiUrl = 'https://newsapi.org';
// async funkcija rabotajet s Promise/obeshanijem
// Promise eto objekt kotorqj izmenitsja v budushem
// U promise jest 3 sostojanija:
// 1: pending (v ozhedanii) - iznachal'noe sostojanie
// 2: fulfilled (vqpolnenqj) - jesli vsjo udachno proshlo
// 3: rejected (otklonjonnyj) - jesli proizoshla oshqbka
// Promisy nam nuzhnq dlja togo 4toby nashe prilozhenije mogla dal'she rabotat' ne dozhidajas' otveta
// kljuchovoe slovo await mozhet ispol'zovatsja tol'ko v async funkcqjah
// async funkcqja vqpolnjajetsa ne v zavisimosti ot vsego ostal'nogo koda.
// await priobrazhajet objet Promise v otvet ot zaprosa
export async function getEverything(data) {
    const params = new URLSearchParams({
        ...data,
        apiKey: process.env.REACT_APP_API_KEY,
        // apiKey: '',
    });
    return await fetch(`${apiUrl}/v2/everything?${params}`);
}
