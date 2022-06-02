
export default class CatService {
    _imageBase = 'https://api.thecatapi.com/v1/images/search';
    _apiKey = 'e7388f74-e527-4712-a446-bf8ddab58919';

    getResource = async () => {
        const res = await fetch(`${this._imageBase}`);

        if (!res.ok) {
            throw new Error(`Coldn't fetch, receiver ${res.status}`)
        }

        return await res.json();
    };

    getCats = async () => {
        const data = [];
        for (let i=0; i<15; i++) {
            const res = await this.getResource();
            data.push(res[0]);
        }
        return data;
    };

};

