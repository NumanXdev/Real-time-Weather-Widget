import TextField from "@mui/material/TextField";

function SearchBox() {
  return (
    <div>
      <h3>Search for the Weather.</h3>
      <form>
        <TextField id="standard-basic" label="Standard" variant="standard" />
      </form>
    </div>
  );
}

export default SearchBox;
