import { File, Folder, Tree } from "@/components/magicui/file-tree";

export function FileTreeDemo() {
  return (
 
    <div className="absolute flex flex-col items-center justify-center overflow-hidden rounded-lg md:shadow-xl [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] transition-all duration-300 ease-out group-hover:scale-105">
      <Tree
        className="p-2 overflow-hidden rounded-md bg-transparent"
        initialSelectedId="7"
        initialExpandedItems={[
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          "10",
          "11",
        ]}
        elements={ELEMENTS}
      >
       <Folder element="src" value="1" iconColor="text-blue-500">
          <Folder value="2" element="app" iconColor="text-green-500">
            <File value="3" iconColor="text-red-500">
              <p>layout.tsx</p>
            </File>
            <File value="4" iconColor="text-purple-500">
              <p>page.tsx</p>
            </File>
          </Folder>
          <Folder value="5" element="components" iconColor="text-yellow-500">
            <Folder value="6" element="ui" iconColor="text-orange-500">
              <File value="7" iconColor="text-pink-500">
                <p>button.tsx</p>
              </File>
            </Folder>
            <File value="8" iconColor="text-indigo-500">
              <p>header.tsx</p>
            </File>
            <File value="9" iconColor="text-teal-500">
              <p>footer.tsx</p>
            </File>
          </Folder>
          <Folder value="10" element="lib" iconColor="text-gray-500">
            <File value="11" iconColor="text-cyan-500">
              <p>utils.ts</p>
            </File>
          </Folder>
        </Folder>
      </Tree>
    </div>
  );
}

const ELEMENTS = [
  {
    id: "1",
    isSelectable: true,
    name: "src",
    children: [
      {
        id: "2",
        isSelectable: true,
        name: "app",
        children: [
          {
            id: "3",
            isSelectable: true,
            name: "layout.tsx",
          },
          {
            id: "4",
            isSelectable: true,
            name: "page.tsx",
          },
        ],
      },
      {
        id: "5",
        isSelectable: true,
        name: "components",
        children: [
          {
            id: "6",
            isSelectable: true,
            name: "header.tsx",
          },
          {
            id: "7",
            isSelectable: true,
            name: "footer.tsx",
          },
        ],
      },
      {
        id: "8",
        isSelectable: true,
        name: "lib",
        children: [
          {
            id: "9",
            isSelectable: true,
            name: "utils.ts",
          },
        ],
      },
    ],
  },
];
