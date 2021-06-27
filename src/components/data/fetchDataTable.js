// const BASE_URL = 'https://f05a0e942e75.ngrok.io';
import { tableData } from './testDataTable';

const getData = async (d) => {

        // const data = await fetch(`${BASE_URL}/${d}`, {
        // method: 'GET',
        // });

        // if(!data.ok) {
        //     let message;
        //     if (data.status === 404) {
        //         message = `На цю дату бронювання не приймаються, виберіть будь ласка іншу дату!)`;
        //     } else {
        //         message = 'На даную дату пока не можно забронировать!'
        //     }
        //     throw new Error(message);
        // }

        // const parseData = await data.json();

        const newData = tableData.map((el, index) => {

            let id = el.place1.name + el.place1.price + el.place1.time + el.id;
            el.id = index + 1;
            el.place1.id = id.replace(/\s/g, '');
            el.place1.isMarked = false;
           
            id = el.place2.name + el.place2.price + el.place2.time + el.id;
            el.id = index + 1;
            el.place2.id = id.replace(/\s/g, '');
            el.place2.isMarked = false;

            id = el.place3.name + el.place3.price + el.place3.time + el.id;
            el.id = index + 1;
            el.place3.id = id.replace(/\s/g, '');
            el.place3.isMarked = false;

            id = el.place4.name + el.place4.price + el.place4.time + el.id;
            el.id = index + 1;
            el.place4.id = id.replace(/\s/g, '');
            el.place4.isMarked = false;

            id = el.place5.name + el.place5.price + el.place5.time + el.id;
            el.id = index + 1;
            el.place5.id = id.replace(/\s/g, '');
            el.place5.isMarked = false;

            id = el.place6.name + el.place6.price + el.place6.time + el.id;
            el.id = index + 1;
            el.place6.id = id.replace(/\s/g, '');
            el.place6.isMarked = false;

            return el;
        });

        return newData;
}

export default getData;