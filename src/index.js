import './style.css';
import { CreateHamburger } from './header';
import { CreateToggleButton } from './header';
import { CreateBurgerSliding } from './content';
import { TaskCreator } from './form';
import { FormButtons } from './form';
import { RetrieveValues } from './form';
import { FilterTasks } from './tasks';
import { Storage } from './storage';

new CreateHamburger();
new CreateToggleButton();
new CreateBurgerSliding();
new TaskCreator();
new FormButtons();
new RetrieveValues();
new FilterTasks();
new Storage();