import { useState } from "react";
import { faker } from "@faker-js/faker";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

function App() {
  const [dragElastic, setDragElastic] = useState(0.02);
  let GREEN = "select-none w-full h-full bg-lime-400 rounded-xl",
    BLACK =
      "select-none w-full h-full col-span-2 bg-stone-900 text-lime-400 rounded-xl",
    TRANSPARENT = "select-none w-full h-full bg-transparent rounded-xl",
    PRIMARY =
      "select-none w-full h-full col-span-2 row-span-2 bg-lime-400 rounded-xl";

  const [pieces, setPieces] = useState([
    {
      id: faker.string.uuid(),
      className: GREEN,
      empty: false,
    },
    {
      id: faker.string.uuid(),
      className: GREEN,
      empty: false,
    },
    {
      id: faker.string.uuid(),
      className: GREEN,
      empty: false,
    },
    {
      id: faker.string.uuid(),
      className: GREEN,
      empty: false,
    },
    {
      id: faker.string.uuid(),
      className: GREEN,
      empty: false,
    },
    {
      id: faker.string.uuid(),
      className: GREEN,
      empty: false,
    },
    {
      id: faker.string.uuid(),
      className: GREEN,
      empty: false,
    },
    {
      id: faker.string.uuid(),
      className: GREEN,
      empty: false,
    },
    {
      id: faker.string.uuid(),
      className: BLACK,
      empty: false,
    },
    {
      id: faker.string.uuid(),
      className: BLACK,
      empty: false,
    },
    {
      id: faker.string.uuid(),
      className: BLACK,
      empty: false,
    },
    {
      id: faker.string.uuid(),
      className: PRIMARY,
      empty: false,
    },
    {
      id: faker.string.uuid(),
      className: TRANSPARENT,
      empty: true,
    },
    {
      id: faker.string.uuid(),
      className: TRANSPARENT,
      empty: true,
    },
  ]);

  return (
    <div className="w-screen bg-blue-500 h-dvh">
      <div className="w-2/3 h-full">
        <DragDropContext onDragEnd={() => console.log("hello world")}>
          <div className="grid grid-cols-4 grid-row-5 gap-2 h-full">
            {pieces.map((piece, index) => (
              <Droppable droppableId="ROOT" type="group">
                {(provided) => (
                  <div
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                    className={piece.className}
                  >
                    <Draggable
                      draggableId={piece.id}
                      key={piece.id}
                      index={index}
                    >
                      {(provided) => (
                        <div
                          className={piece.className}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          ref={provided.innerRef}
                        >
                          <h3>{index}</h3>
                        </div>
                      )}
                    </Draggable>
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            ))}
          </div>
        </DragDropContext>
      </div>
    </div>
  );
}

export default App;
