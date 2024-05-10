import { RiMastodonLine } from "react-icons/ri";

function Tasks({ data }) {
  return (
    <div className="tasks">
      {data?.map((item) => (
        <div key={item._id} className="tasks__card">
          <span className={item.status}></span>
          <RiMastodonLine />
          <h4>{item.title}</h4>
        </div>
      ))}
    </div>
  );
}

export default Tasks;
