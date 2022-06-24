import {Spell} from "../graphQl/interfaces";
import {FC} from "react";
import {Box, Grid, IconButton, Paper, styled, Typography} from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';

interface Props {
  spell: Spell,
  getHandleEdit: (id: string) => () => void,
}

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  color: theme.palette.text.primary,
}));

const SpellItem: FC<Props> = ({spell, getHandleEdit}) => {
  return (
    <Item>
        <Typography variant="h5">
          {spell.name} | {spell.enName}
        </Typography>
          <Grid container pt={1} rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} justifyContent="space-between">
            <Grid item xs={2}><Typography variant="body2">{`Рівень: ${spell.attributes.level}`}</Typography></Grid>
            <Grid item xs={2}><Typography variant="body2">{`Школа: ${spell.attributes.school}`}</Typography></Grid>
            <Grid item xs={2}><Typography variant="body2">{`Дальність: ${spell.attributes.attackType}`}</Typography></Grid>
            <Grid item xs={2}><Typography variant="body2">{`Час втілення: ${spell.attributes.castingTime}`}</Typography></Grid>
            <Grid item xs={2} textAlign="right">
              <IconButton
                onClick={getHandleEdit(spell.id)}
                color="primary"
                aria-label="upload picture"
                component="span"
              >
                <EditIcon />
              </IconButton>
            </Grid>
          </Grid>
      <Box sx={{pt: 3}}>
        <Typography component="p" variant="body1">{spell.description}</Typography>
      </Box>
    </Item>
  );
}

export default SpellItem;