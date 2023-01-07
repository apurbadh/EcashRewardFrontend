import { Button, TextField, Typography } from '@mui/material'
import CardContent from '@mui/material/CardContent'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import { useRef, useEffect, useState } from 'react'

export default function TaskCreate(){
  const editorRef = useRef();
  const [editorLoaded, setEditorLoaded] = useState(false)
   const { CKEditor, ClassicEditor } = editorRef.current || {};
   useEffect(() => {
    editorRef.current = {
         CKEditor: require("@ckeditor/ckeditor5-react").CKEditor,
         ClassicEditor: require("@ckeditor/ckeditor5-build-classic")
        };
        setEditorLoaded(true)
        console.log(ClassicEditor)
    }, []);
  return <Card>
    <CardContent>
      <Typography variant="h5" component="div">
        Create Task
      </Typography>

    <form>
        <Grid container spacing={7}>
          <Grid item xs={12} sx={{ marginTop: 4.8, marginBottom: 3 }}>
             {/* <Grid item xs={12} sm={6}> */}
            <TextField fullWidth label='Title' placeholder='Lorem Ipsum' />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth label='Limit' placeholder='100' type="number" />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label='Points'
              placeholder='100'
              type="number"
            />
          {/* </Grid> */}
          </Grid>
          <Grid item xs={12}>

           { editorLoaded ? <CKEditor
                    editor={ ClassicEditor }
                       config={{
                        ckfinder: {
                          uploadUrl: 'http://127.0.0.1:8000/api/image-upload'
                       } }}
                /> : 'Loading...'}
                </Grid>
          </Grid>
          <Grid item xs={12}>
            <Button variant='contained' sx={{ marginRight: 3.5, marginTop: 3.5 }}>
              Save Changes
            </Button>
            </Grid>
          </form>
  </CardContent>
  </Card>
}
