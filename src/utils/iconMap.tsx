import type { SvgIconComponent } from '@mui/icons-material';
import AgricultureIcon from '@mui/icons-material/Agriculture';
import BuildIcon from '@mui/icons-material/Build';
import ConstructionIcon from '@mui/icons-material/Construction';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EngineeringIcon from '@mui/icons-material/Engineering';
import FoundationIcon from '@mui/icons-material/Foundation';
import LandscapeIcon from '@mui/icons-material/Landscape';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
import ScheduleIcon from '@mui/icons-material/Schedule';
import StraightenIcon from '@mui/icons-material/Straighten';
import TerrainIcon from '@mui/icons-material/Terrain';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';

const ICON_MAP: Record<string, SvgIconComponent> = {
  Terrain: TerrainIcon,
  Engineering: EngineeringIcon,
  Foundation: FoundationIcon,
  DeleteForever: DeleteForeverIcon,
  Agriculture: AgricultureIcon,
  PrecisionManufacturing: PrecisionManufacturingIcon,
  Construction: ConstructionIcon,
  Landscape: LandscapeIcon,
  Straighten: StraightenIcon,
  Schedule: ScheduleIcon,
  VerifiedUser: VerifiedUserIcon,
  Build: BuildIcon,
  LocationOn: LocationOnIcon,
};

export function getMuiIcon(name: string): SvgIconComponent {
  return ICON_MAP[name] ?? BuildIcon;
}
