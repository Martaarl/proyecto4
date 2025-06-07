export default function createProjectCard({name, image, number, link}){
    const cardDiv = document.createElement('div');
            cardDiv.className= 'cardDiv';
        
            const anchorCard = document.createElement('a');
            anchorCard.href= link;
            anchorCard.textContent = name;
            anchorCard.className = 'anchorCard';

            const imgCard = document.createElement('img');
            imgCard.src= image;
            imgCard.className = 'imgCard';

            const numberCard = document.createElement('img');
            numberCard.src= number;
            numberCard.className = 'numberCard';

            cardDiv.append(anchorCard,imgCard,numberCard);
            return cardDiv;
}