import Accordion from './ui/element/Accordion/Accordion.vue';
import Avatar from './ui/element/Avatar/Avatar.vue';
import AvatarGroup from './ui/element/AvatarGroup/AvatarGroup.vue';
import Badge from './ui/element/Badge/Badge.vue';
import Breadcrumb from './ui/element/Breadcrumb/Breadcrumb.vue';
import Button from './ui/element/Button/Button.vue';
import Card from './ui/element/Card/Card.vue';
import CardSimple from './ui/element/CardSimple/CardSimple.vue';
import Checkbox from './ui/element/Checkbox/Checkbox.vue';
import CircleProgress from './ui/element/Progress/CircleProgress/CircleProgress.vue';
import LineProgress from './ui/element/Progress/LineProgress/LineProgress.vue';
import Dropdown from './ui/element/Dropdown/Dropdown.vue';
import Dialog from './ui/element/Dialog/Dialog.vue';
import Divider from './ui/element/Divider/Divider.vue';
import Grid from './ui/layout/Grid/Grid.vue';
import Row from './ui/layout/Grid/Row.vue';
import Column from './ui/layout/Grid/Column.vue';
import Image from './ui/element/Image/Image.vue';
import Input from './ui/element/Input/Input.vue';
import ListItem from './ui/element/List/ListItem.vue';
import List from './ui/element/List/List.vue';
import Menu from './ui/element/Menu/Menu.vue';
import Navbar from './ui/element/Navbar/Navbar.vue';
import Pagination from './ui/element/Pagination/Pagination.vue';
import Radio from './ui/element/Radio/Radio.vue';
import Search from './ui/element/Search/Search.vue';
import Select from './ui/element/Select/Select.vue';
import SideNav from './ui/element/SideNav/SideNav.vue';
import Slider from './ui/element/Slider/Slider.vue';
import SliderControl from './ui/element/SliderControl/SliderControl.vue';
import StatusIndicator from './ui/element/StatusIndicator/StatusIndicator.vue';
import Stepper from './ui/element/Stepper/Stepper.vue';
import Table from './ui/element/Table/Table.vue';
import Tag from './ui/element/Tag/Tag.vue';
import Textarea from './ui/element/Textarea/Textarea.vue';
import Title from './ui/element/Title/Title.vue';
import Toast from './ui/element/Toast/Toast.vue';
import Toggle from './ui/element/Toggle/Toggle.vue';
import Tooltip from './ui/element/Tooltip/Tooltip.vue';

export {
  Accordion,
  Avatar,
  AvatarGroup,
  Badge,
  Breadcrumb,
  Button,
  Card,
  CardSimple,
  Checkbox,
  CircleProgress,
  Column,
  Dropdown,
  Dialog,
  Divider,
  Grid,
  Image,
  Input,
  ListItem,
  LineProgress,
  List,
  Menu,
  Navbar,
  Pagination,
  Radio,
  Row,
  Search,
  Select,
  SideNav,
  Slider,
  SliderControl,
  StatusIndicator,
  Stepper,
  Table,
  Tag,
  Textarea,
  Title,
  Toast,
  Toggle,
  Tooltip,
};

const components = [
  { key: 'Accordion', value: Accordion },
  { key: 'Avatar', value: Avatar },
  { key: 'AvatarGroup', value: AvatarGroup },
  { key: 'Badge', value: Badge },
  { key: 'Breadcrumb', value: Breadcrumb },
  { key: 'Button', value: Button },
  { key: 'Card', value: Card },
  { key: 'CardSimple', value: CardSimple },
  { key: 'Checkbox', value: Checkbox },
  { key: 'CircleProgress', value: CircleProgress },
  { key: 'Column', value: Column },
  { key: 'Dropdown', value: Dropdown },
  { key: 'Dialog', value: Dialog },
  { key: 'Divider', value: Divider },
  { key: 'Grid', value: Grid },
  { key: 'Image', value: Image },
  { key: 'Input', value: Input },
  { key: 'ListItem', value: ListItem },
  { key: 'LineProgress', value: LineProgress },
  { key: 'List', value: List },
  { key: 'Menu', value: Menu },
  { key: 'Navbar', value: Navbar },
  { key: 'Pagination', value: Pagination },
  { key: 'Radio', value: Radio },
  { key: 'Row', value: Row },
  { key: 'Search', value: Search },
  { key: 'Select', value: Select },
  { key: 'SideNav', value: SideNav },
  { key: 'Slider', value: Slider },
  { key: 'SliderControl', value: SliderControl },
  { key: 'StatusIndicator', value: StatusIndicator },
  { key: 'Stepper', value: Stepper },
  { key: 'Table', value: Table },
  { key: 'Tag', value: Tag },
  { key: 'Textarea', value: Textarea },
  { key: 'Title', value: Title },
  { key: 'Toast', value: Toast },
  { key: 'Toggle', value: Toggle },
  { key: 'Tooltip', value: Tooltip },
];

export default {
  install(app) {
    components.forEach((component) => {
      app.component(component.key, component.value);
    });
  },
};
