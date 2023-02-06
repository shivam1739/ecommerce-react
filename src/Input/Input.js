import "./input.css";
export default function Input({ info }) {
  return (
    <div className="field">
      <label>{info.label}</label>
      <input
        name={info.name}
        type={info.type}
        placeholder={info.placeholder}
        value={info.email}
        onChange={info.handleChage}
      />
    </div>
  );
}

/*
 <Input
                id="nameLabel"
                info={{
                  label: "Name",
                  name: "name",
                  type: "text",
                  handleChage,
                  placeholder: "Name",
                  vale: user.name,
                }}
                />

           
                 

              
*/
