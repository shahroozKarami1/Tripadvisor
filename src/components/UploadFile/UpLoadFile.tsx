import { Button, TextField, Typography } from "@mui/material";
import { useRef, useState } from "react";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
const UpLoadFile = () => {
  let inputRef = useRef<HTMLInputElement | null>(null);
  let [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handlerOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setSelectedFile(event.target.files[0]);
    }
  };

  const onChooseFile = () => {
    inputRef.current?.click();
  };

  return (
    <>
      <TextField
        inputRef={inputRef}
        type="file"
        sx={{ display: "none" }}
        onChange={handlerOnChange}
      />
      <Button
        onClick={onChooseFile}
        sx={{ color: "#000", fontWeight: "light", fontSize: "1rem" }}
      >
        <AddPhotoAlternateIcon
          sx={{ "& path": { color: "var(--primary-color)" } }}
        />
        <Typography sx={{ color: `var(--primary-color)` }}>
          اضافه کردن تصویر بنر
        </Typography>
      </Button>
      {selectedFile && <p>فایل انتخاب شده: {selectedFile.name}</p>}
    </>
  );
};

export default UpLoadFile;
