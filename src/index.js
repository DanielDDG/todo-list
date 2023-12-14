import './style.css';
import { CreateHamburger } from './header';
import { CreateToggleButton } from './header';
import { CreateBurgerSliding } from './content';
import { TaskCreator } from './form';
import { FormButtons } from './form';
import { RetrieveValues } from './form';

const createHamburger = new CreateHamburger();
const createToggleButton = new CreateToggleButton();
const createBurgerSliding = new CreateBurgerSliding();
const taskCreator = new TaskCreator();
const toggleForm = new FormButtons();
const retrieveValues = new RetrieveValues();