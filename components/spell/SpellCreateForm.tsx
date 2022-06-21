import {FC} from "react";
import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  FormGroup,
  InputLabel,
  MenuItem,
  Select,
  Switch,
  TextField,
  Typography
} from "@mui/material";
import {AttackType, CastingTime, SaveRequired, Schools, SpellDuration} from "./enums/enums";
import {FormikProps, useFormik} from 'formik';
import * as yup from 'yup';
import {ClassesIds} from "../classes/graphql";

interface FormFields {
  name?: string,
  enName?: string,
  level?: number,
  school?: Schools,
  concentration?: boolean,
  ritual?: boolean,
  castingTime?: CastingTime,
  componentVerbal?: boolean,
  componentSomatic?: boolean,
  componentMaterial?: boolean,
  attackType?: AttackType,
  duration?: SpellDuration,
  saveRequired?: SaveRequired,
  classes: ClassesIds[],
  description: string,
}

interface Props {
  onSubmit: (data: FormFields) => {}
}


const validationSchema = yup.object({
  name: yup
    .string()
    .required('Введіть імʼя українською'),
  enName: yup
    .string()
    .required('Введіть імʼя англыйскою'),
  description: yup
    .string()
    .required('Напишіть опис заклинання')
});

const formControlStyles = { m: 1, minWidth: 207 };

export const CreateSpellForm: FC<Props> = ({onSubmit}) => {
  const formic: FormikProps<FormFields> = useFormik<FormFields>({
    initialValues: {
      name: '',
      enName: '',
      level: 0,
      school: Schools.EVOCATION,
      castingTime: CastingTime.ACTION,
      duration: SpellDuration.INSTANTLY,
      concentration: false,
      ritual: false,
      saveRequired: SaveRequired.NONE,
      attackType: AttackType.RANGE,
      componentMaterial: true,
      componentSomatic: true,
      componentVerbal: true,
      classes: [],
      description: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);
      onSubmit(values);
    }
  });


  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1 },
      }}
      noValidate
      autoComplete="off"
      onSubmit={formic.handleSubmit}
    >
      <div>
          <TextField
            variant="outlined"
            margin="normal"
            required
            id="name"
            label="Назва українською"
            name="name"
            value={formic.values.name}
            onChange={formic.handleChange}
            error={formic.touched.name && Boolean(formic.errors.name)}
            helperText={formic.touched.name && formic.errors.name}
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            id="enName"
            label="Назва англійскою"
            name="enName"
            value={formic.values.enName}
            onChange={formic.handleChange}
            error={formic.touched.enName && Boolean(formic.errors.enName)}
            helperText={formic.touched.enName && formic.errors.enName}
          />
        </div>
      <div>
        <FormControl sx={formControlStyles}>
            <InputLabel id="school-label">Школа магiї</InputLabel>
            <Select
              id='school'
              name='school'
              labelId="school-label"
              label="Школа магії"
              value={formic.values.school}
              onChange={formic.handleChange}
            >
              {Object.values(Schools).map(item => (
                <MenuItem value={item} key={item}>{item}</MenuItem>
              ))}
            </Select>
        </FormControl>
        <FormControl sx={formControlStyles}>
          <InputLabel id="level-label">Рівень</InputLabel>
          <Select
            id='level'
            name='level'
            labelId="level-label"
            label="Рівень"
            value={formic.values.level}
            onChange={formic.handleChange}
          >
            {Array.from(Array(10).keys()).map(item => (
              <MenuItem value={item} key={item}>{item}</MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl sx={formControlStyles}>
          <InputLabel id="castingTime-label">Час створення</InputLabel>
          <Select
            id='castingTime'
            name='castingTime'
            labelId="castingTime-label"
            label="Час створення"
            value={formic.values.castingTime}
            onChange={formic.handleChange}
          >
            {Object.values(CastingTime).map(item => (
              <MenuItem value={item} key={item}>{item}</MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl sx={formControlStyles}>
          <InputLabel id="duration-label">Тривалість дії</InputLabel>
          <Select
            id='duration'
            name='duration'
            labelId="duration-label"
            label="Тривалість дії"
            value={formic.values.duration}
            onChange={formic.handleChange}
          >
            {Object.values(SpellDuration).map(item => (
              <MenuItem value={item} key={item}>{item}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
      <div>
        <FormControl sx={formControlStyles}>
          <InputLabel id="attackType-label">Дальність</InputLabel>
          <Select
            id='attackType'
            name='attackType'
            labelId="attackType-label"
            label="Дальність"
            value={formic.values.attackType}
            onChange={formic.handleChange}
          >
            {Object.values(AttackType).map(item => (
              <MenuItem value={item} key={item}>{item}</MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl sx={formControlStyles}>
          <InputLabel id="saveRequired-label">Рятівний кидок</InputLabel>
          <Select
            id='saveRequired'
            name='saveRequired'
            labelId="saveRequired-label"
            label="Рятівний кидок"
            value={formic.values.saveRequired}
            onChange={formic.handleChange}
          >
            {Object.values(SaveRequired).map(item => (
              <MenuItem value={item} key={item}>{item}</MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl sx={formControlStyles}>
          <InputLabel id="classes-label">Класи</InputLabel>
          <Select
            id='classes'
            name='classes'
            labelId="classes-label"
            label="Класи"
            multiple
            value={formic.values.classes}
            onChange={formic.handleChange}
          >
            {Object.values(ClassesIds).map(item => (
              <MenuItem value={item} key={item}>{item}</MenuItem>
            ))}
          </Select>
        </FormControl>
        <div>
          <FormControl sx={formControlStyles}>
            <Typography variant="subtitle2">Компоненти</Typography>
            <FormGroup sx={{p: 1}}>
              <FormControlLabel
                control={
                <Switch
                  id="componentVerbal"
                  name="componentVerbal"
                  value={formic.values.componentVerbal}
                  onChange={formic.handleChange}
                />
              }
                label="Вербальний"
              />
              <FormControlLabel
                control={
                <Switch
                  id="componentSomatic"
                  name="componentSomatic"
                  value={formic.values.componentSomatic}
                  onChange={formic.handleChange}
                />
              }
                label="Соматичний"
              />
              <FormControlLabel
                control={
                <Switch
                  id="componentMaterial"
                  name="componentMaterial"
                  value={formic.values.componentMaterial}
                  onChange={formic.handleChange}
                />
              }
                label="Матеріальний"
              />
            </FormGroup>
          </FormControl>
          <FormControl sx={formControlStyles}>
          <FormGroup sx={{p: 1, mt: '22px'}}>
            <FormControlLabel
              control={
              <Switch
                id="concentration"
                name="concentration"
                value={formic.values.concentration}
                onChange={formic.handleChange}
              />
            }
              label="Концентрація"
            />
            <FormControlLabel
              control={
              <Switch
                id="ritual"
                name="ritual"
                value={formic.values.ritual}
                onChange={formic.handleChange}
              />
            }
              label="Рітуал"
            />
          </FormGroup>
            </FormControl>
        </div>
      </div>
      <div>
        <TextField
          id="description"
          name="description"
          label="Опис"
          multiline
          rows={4}
          defaultValue=""
          fullWidth
          value={formic.values.description}
          onChange={formic.handleChange}
          error={formic.touched.description && Boolean(formic.errors.description)}
          helperText={formic.touched.description && formic.errors.description}
        />
      </div>
      <Box component="div" sx={{mt: 2, ml: 1}}>
        <Button variant="contained" type="submit">Зберегти</Button>
      </Box>
    </Box>
  )
}

export default CreateSpellForm;