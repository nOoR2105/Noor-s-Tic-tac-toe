let boxes = document.querySelectorAll(".box");

let turnO = false;

let count = 0;

const wins = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,4,6],
    [2,5,8],
    [3,4,5],
    [6,7,8]
]

boxes.forEach((box) =>{
    box.addEventListener("click", () => {
        if(turnO)
            {
                chance.innerText = 'PLAYER 1 TURN';
                box.innerText = "O";
                turnO = false;
            }
        else
        {
            chance.innerText = 'PLAYER 2 TURN';
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;

        count++;

        let won = winner();

        if(count === 9 && !won)
            {
                draw();
            }
    });
});

const draw = () => {
    modal.showModal();

    chance.innerText = 'GAME OVER';
        
    msg.innerText = 'GAME IS DRAW';
}

const winner = () => {
    for(let pattern of wins)
    {
        let val1 = boxes[pattern[0]].innerText;
        let val2 = boxes[pattern[1]].innerText;
        let val3 = boxes[pattern[2]].innerText;

        if(val1 != "" && val2 != "" && val3 != "")
            {
                if(val1 === val2 && val2 === val3)
                    {
                        

                        for(let box of boxes)
                            {
                                box.disabled = true;
                            
                            }

                            show(val1);
                    }
               
            }
    }
};

const modal =  document.querySelector('#modal');


const show = (winner) => 
    {
        modal.showModal();

        chance.innerText = 'GAME OVER';


        if(winner === 'X')
            {
                msg.innerText = 'CONGRATULATIONS, WINNER IS PLAYER 1';

            }
        else
            {
                msg.innerText = 'CONGRATULATIONS, WINNER IS PLAYER 2';

            }
    };

