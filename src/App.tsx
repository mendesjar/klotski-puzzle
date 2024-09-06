import { useState } from "react";
import { faker } from "@faker-js/faker";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

interface ILocal {
  id: string;
  elementoId: string | null;
  className: string;
  empty: boolean;
}

function App() {
  let GREEN = "select-none w-full h-full bg-lime-400 rounded-xl",
    BLACK =
      "select-none w-full h-full col-span-2 bg-stone-900 text-lime-400 rounded-xl",
    TRANSPARENT = "select-none w-full h-full bg-transparent rounded-xl",
    PRIMARY =
      "select-none w-full h-full col-span-2 row-span-2 bg-lime-400 rounded-xl";

  const [locais, setLocais] = useState<ILocal[]>([
    {
      id: faker.string.uuid(),
      elementoId: "1",
      className: GREEN,
      empty: false,
    },
    {
      id: faker.string.uuid(),
      elementoId: "2",
      className: GREEN,
      empty: false,
    },
    {
      id: faker.string.uuid(),
      elementoId: "3",
      className: GREEN,
      empty: false,
    },
    {
      id: faker.string.uuid(),
      elementoId: "4",
      className: GREEN,
      empty: false,
    },
    {
      id: faker.string.uuid(),
      elementoId: "5",
      className: GREEN,
      empty: false,
    },
    {
      id: faker.string.uuid(),
      elementoId: "6",
      className: GREEN,
      empty: false,
    },
    {
      id: faker.string.uuid(),
      elementoId: "7",
      className: GREEN,
      empty: false,
    },
    {
      id: faker.string.uuid(),
      elementoId: "8",
      className: GREEN,
      empty: false,
    },
    {
      id: faker.string.uuid(),
      elementoId: "9",
      className: BLACK,
      empty: false,
    },
    {
      id: faker.string.uuid(),
      elementoId: "10",
      className: BLACK,
      empty: false,
    },
    {
      id: faker.string.uuid(),
      elementoId: "11",
      className: BLACK,
      empty: false,
    },
    {
      id: faker.string.uuid(),
      elementoId: "12",
      className: PRIMARY,
      empty: false,
    },
    {
      id: faker.string.uuid(),
      elementoId: null,
      className: TRANSPARENT,
      empty: true,
    },
    {
      id: faker.string.uuid(),
      elementoId: null,
      className: TRANSPARENT,
      empty: true,
    },
  ]);
  const [pieces, setPieces] = useState([
    {
      id: "1",
      className: GREEN,
    },
    {
      id: "2",
      className: GREEN,
    },
    {
      id: "3",
      className: GREEN,
    },
    {
      id: "4",
      className: GREEN,
    },
    {
      id: "5",
      className: GREEN,
    },
    {
      id: "6",
      className: GREEN,
    },
    {
      id: "7",
      className: GREEN,
    },
    {
      id: "8",
      className: GREEN,
    },
    {
      id: "9",
      className: BLACK,
    },
    {
      id: "10",
      className: BLACK,
    },
    {
      id: "11",
      className: BLACK,
    },
    {
      id: "12",
      className: PRIMARY,
    },
  ]);

  const onDragEnd = (result, columns, setColumns) => {
    if (!result.destination) return;
    const { source, destination } = result;
    if (source.droppableId !== destination.droppableId) {
      const sourceColumn: ILocal = columns.find(
        (column: any) => column.id === source.droppableId
      );
      const destColumn: ILocal = columns.find(
        (column: any) => column.id === destination.droppableId
      );
      const sourceItem = pieces.find(
        (piece) => piece.id === sourceColumn.elementoId
      );
      const destItem = pieces.find(
        (piece) => piece.id === destColumn.elementoId
      );
      setColumns([
        ...columns.map((obj: ILocal) => {
          if (source.droppableId == obj.id) {
            return {
              ...sourceColumn,
              elementoId: destItem?.id ? destItem?.id : null,
              className: destItem?.className ? destItem?.className : null,
              empty: destItem?.id ? true : false,
            };
          }
          if (destination.droppableId == obj.id) {
            return {
              ...destColumn,
              elementoId: sourceItem?.id ? destItem?.id : null,
              className: sourceItem?.className ? destItem?.className : null,
              empty: sourceItem?.id ? true : false,
            };
          }
          return obj;
        }),
      ]);
    }
  };

  return (
    <div className="w-screen bg-blue-500 h-dvh">
      <div className="w-2/3 h-full">
        <DragDropContext
          onDragEnd={(result) => {
            onDragEnd(result, locais, setLocais);
          }}
        >
          <div className="grid grid-cols-4 grid-row-5 gap-2 h-full">
            {locais.map((column, index) => {
              return (
                <Droppable key={index} droppableId={column.id}>
                  {(provided) => (
                    <div
                      {...provided.droppableProps}
                      ref={provided.innerRef}
                      className={column.className}
                    >
                      {pieces.map((item, index) => {
                        if (item.id === column.elementoId)
                          return (
                            <Draggable
                              draggableId={item.id}
                              key={item && item.id}
                              index={index}
                            >
                              {(provided) => (
                                <div
                                  className={item && item.className}
                                  {...provided.draggableProps}
                                  {...provided.dragHandleProps}
                                  ref={provided.innerRef}
                                >
                                  <h3>{index + 1}</h3>
                                </div>
                              )}
                            </Draggable>
                          );
                      })}

                      {provided.placeholder}
                    </div>
                  )}
                </Droppable>
              );
            })}
          </div>
        </DragDropContext>
      </div>
    </div>
  );
}

export default App;
