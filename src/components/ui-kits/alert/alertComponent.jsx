import React, { useState } from "react";
import { Button, Alert } from "reactstrap";
import { Clock,Heart,ThumbsUp,HelpCircle,Bell,ThumbsDown,AlertTriangle,AlertCircle} from 'react-feather'

 const AlertItemWithDarkDismissing = props => {
  const {item} = props;
  const [Open, setOpen] = useState(true)
  const Toggle = () => setOpen(!Open);
  
  return (
      <Alert className="alert-dismissible" color={item.alertcolor}
      isOpen={Open}
      target={"Alert-" + item.id}
      ><strong>{"Holy !"} </strong> {item.alerttxt}
      <Button className="close" color={item.btnclose} id={"Alert-" + item.id} onClick={Toggle} ><span>×</span></Button>
      </Alert>
  );
};

const AlertItemWithIcon = props => {
    const { item} = props;
    const [Open, setOpen] = useState(true)
    const Toggle = () => setOpen(!Open);

    return (
        <Alert className="alert-dismissible" 
          color={item.alertcolor}
          isOpen={Open}
          target={"Alert-" + item.id}
        >{item.icon}
        <p>{item.alerttxt}</p>
        <Button className="close" color={item.btnclose} id={"Alert-" + item.id} onClick={Toggle}><span>×</span></Button>
        </Alert>
    );
  };

const AlertItemWithLightDismissing = props => {
const {item} = props;
const [Open, setOpen] = useState(true)
const Toggle = () => setOpen(!Open)

return (
    <Alert className="alert-dismissible" color={item.alertcolor}
    isOpen={Open}
    target={"Alert-" + item.id}
    ><strong>{"Holy !"} </strong> {item.alerttxt}
    <Button className="close" color={item.btnclose} id={"Alert-" + item.id} onClick={Toggle} ><span>×</span></Button>
    </Alert>
);
};

const AlertItemWithIconOutline = props => {
    const {item} = props;
    const [Open, setOpen] = useState(true)
    const Toggle = () => setOpen(!Open);

    
    return (
        <Alert className="alert-dismissible" 
          color={item.alertcolor}
          isOpen={Open}
          target={"Alert-" + item.id}
        >{item.icon}
        <p>{item.alerttxt}</p>
        <Button className="close" color={item.btnclose} id={"Alert-" + item.id} onClick={Toggle}><span>×</span></Button>
        </Alert>
    );
  };

  const AlertItemWithIconInverse = props => {
    const {item} = props;
    const [Open, setOpen] = useState(true)
    const Toggle = () => setOpen(!Open);

    return (
        <Alert  className="alert-dismissible"
        color={item.alertcolor}
          isOpen={Open}
          target={"Alert-" + item.id}
        >{item.icon}  
        <p>{item.alerttxt}</p>
        <Button className="close"  color={item.btnclose} id={"Alert-" + item.id} onClick={Toggle}><span>×</span></Button>
        </Alert>
    );
  };



export const MultipleAlertWithDarkDismissing = props => {
  return (
    <>
      {[
        {
        id:1,
        alerttxt:'You can check in on some of those fields below.',
        alertcolor:'primary dark',
        btnclose:'default'
       
        },
        {
        id:2,
        alerttxt:'You can check in on some of those fields below.',
        alertcolor:'secondary dark',
        btnclose:'default'
       
          
        },
        {
        id:3,
        alerttxt:'You can check in on some of those fields below.',
        alertcolor:'success dark',
        btnclose:'default'
       
          
        },
        {
        id:4,
        alerttxt:'You can check in on some of those fields below.',
        alertcolor:'info dark',
        btnclose:'default'
        },
        {
        id:5,
        alerttxt:'You can check in on some of those fields below.',
        alertcolor:'warning dark',
        btnclose:'default'
        
        },
        {
        id:6,
        alerttxt:'You can check in on some of those fields below.',
        alertcolor:'danger dark',
        btnclose:'default'
        
        
        },
        {
        id:7,
        alerttxt:'You can check in on some of those fields below.',
        alertcolor:'light dark',
        btnclose:'default'
        
        
        },
        {
        id:8,
        alerttxt:'You can check in on some of those fields below.',
        alertcolor:'dark dark',
        btnclose:'default'
        }
      ].map((item, i) => {
        return <AlertItemWithDarkDismissing key={i} item={item} />;
      })}
    </>
  );
};

export const MultipleAlertWithIcon = props => {
    return (
      <>
        {[
          {
          id:1,
          alerttxt:'You can check in on some of those fields below.',
          alertcolor:'primary dark',
          btnclose:'default',
          icon:<Clock/>
         
          },
          {
          id:2,
          alerttxt:'You can check in on some of those fields below.',
          alertcolor:'secondary dark',
          btnclose:'default',
          icon:<Heart/>
         
            
          },
          {
          id:3,
          alerttxt:'You can check in on some of those fields below.',
          alertcolor:'success dark',
          btnclose:'default',
          icon:<ThumbsUp/>
         
            
          },
          {
          id:4,
          alerttxt:'You can check in on some of those fields below.',
          alertcolor:'info dark',
          btnclose:'default',
          icon:<HelpCircle/>
          },
          {
          id:5,
          alerttxt:'You can check in on some of those fields below.',
          alertcolor:'warning dark',
          btnclose:'default',
          icon:<Bell/>
          
          },
          {
          id:6,
          alerttxt:'You can check in on some of those fields below.',
          alertcolor:'danger dark',
          btnclose:'default',
          icon:<ThumbsDown/>
          
          
          },
          {
          id:7,
          alerttxt:'You can check in on some of those fields below.',
          alertcolor:'light dark',
          btnclose:'default',
          icon:<AlertTriangle/>
          
          
          },
          {
          id:8,
          alerttxt:'You can check in on some of those fields below.',
          alertcolor:'dark dark',
          btnclose:'default',
          icon:<AlertCircle/>
           
            }
        ].map((item, i) => {
          return <AlertItemWithIcon key={i} item={item} />;
        })}
      </>
    );
  };
export const MultipleAlertWithLightDismissing = props => {
    return (
      <>
        {[
          {
          id:1,
          alerttxt:'You can check in on some of those fields below.',
          alertcolor:'primary',
          btnclose:'default'
         
          },
          {
          id:2,
          alerttxt:'You can check in on some of those fields below.',
          alertcolor:'secondary',
          btnclose:'default'
         
            
          },
          {
          id:3,
          alerttxt:'You can check in on some of those fields below.',
          alertcolor:'success',
          btnclose:'default'
         
            
          },
          {
          id:4,
          alerttxt:'You can check in on some of those fields below.',
          alertcolor:'info',
          btnclose:'default'
          },
          {
          id:5,
          alerttxt:'You can check in on some of those fields below.',
          alertcolor:'warning',
          btnclose:'default'
          
          },
          {
          id:6,
          alerttxt:'You can check in on some of those fields below.',
          alertcolor:'danger',
          btnclose:'default'
          
          
          },
          {
          id:7,
          alerttxt:'You can check in on some of those fields below.',
          alertcolor:'light',
          btnclose:'default'
          
          
          },
          {
          id:8,
          alerttxt:'You can check in on some of those fields below.',
          alertcolor:'dark',
          btnclose:'default'
          }
        ].map((item, i) => {
          return <AlertItemWithLightDismissing key={i} item={item} />;
        })}
      </>
    );
  };
export const MultipleAlertWithIconOutline = props => {
    return (
      <>
        {[
          {
          id:1,
          alerttxt:'You can check in on some of those fields below.',
          alertcolor:'primary outline',
          btnclose:'default',
          icon:<Clock/>
         
          },
          {
          id:2,
          alerttxt:'You can check in on some of those fields below.',
          alertcolor:'secondary outline',
          btnclose:'default',
          icon:<Heart/>
         
            
          },
          {
          id:3,
          alerttxt:'You can check in on some of those fields below.',
          alertcolor:'success outline',
          btnclose:'default',
          icon:<ThumbsUp/>
         
            
          },
          {
          id:4,
          alerttxt:'You can check in on some of those fields below.',
          alertcolor:'info outline',
          btnclose:'default',
          icon:<HelpCircle/>
          },
          {
          id:5,
          alerttxt:'You can check in on some of those fields below.',
          alertcolor:'warning outline',
          btnclose:'default',
          icon:<Bell/>
          
          },
          {
          id:6,
          alerttxt:'You can check in on some of those fields below.',
          alertcolor:'danger outline',
          btnclose:'default',
          icon:<ThumbsDown/>
          
          
          },
          {
          id:7,
          alerttxt:'You can check in on some of those fields below.',
          alertcolor:'light outline',
          btnclose:'default',
          icon:<AlertTriangle/>
          
          
          },
          {
          id:8,
          alerttxt:'You can check in on some of those fields below.',
          alertcolor:'dark dark',
          btnclose:'default',
          icon:<AlertCircle/>
           
            }
        ].map((item, i) => {
          return <AlertItemWithIconOutline key={i} item={item} />;
        })}
      </>
    );
  };
  export const MultipleAlertWithIconInverse = props => {
    return (
      <>
        {[
          {
          id:1,
          alerttxt:'Your time Over after <b>5</b> miniute',
          alertcolor:'primary inverse',
          btnclose:'default',
          icon:<i className="icon-timer"></i>
         
          },
          {
          id:2,
          alerttxt:'You can check in on some of those fields below.',
          alertcolor:'secondary inverse',
          btnclose:'default',
          icon:<i className="icon-heart"></i>
         
            
          },
          {
          id:3,
          alerttxt:'You can check in on some of those fields below.',
          alertcolor:'success inverse',
          btnclose:'default',
          icon:<i className="icon-thumb-up alert-center"></i>,
          boldtxt:'Well Done!'
         
            
          },
          {
          id:4,
          alerttxt:'You can check in on some of those fields below.',
          alertcolor:'info inverse',
          btnclose:'default',
          icon:<i className="icon-help-alt"></i>,
          boldtxt:'Welcome!'
          },
          {
          id:5,
          alerttxt:'You can check in on some of those fields below.',
          alertcolor:'warning inverse',
          btnclose:'default',
          icon:<i className="icon-bell"></i>,
          boldtxt:'Congratulation!'
          
          },
          {
          id:6,
          alerttxt:'You can check in on some of those fields below.',
          alertcolor:'danger inverse',
          btnclose:'default',
          icon:<i className="icon-thumb-down"></i>,
          txt:'Your',
          boldtxt:'Perfomance'

          
          
          },
          {
          id:7,
          alerttxt:'You can check in on some of those fields below.',
          alertcolor:'light outline inverse',
          btnclose:'default',
          icon:<i className="icon-alert txt-dark"></i>
          
          
          },
          {
          id:8,
          alerttxt:'You can check in on some of those fields below.',
          alertcolor:'dark inverse',
          btnclose:'default',
          icon:<i className="icon-info-alt"></i>
           
            }
        ].map((item, i) => {
          return <AlertItemWithIconInverse key={i} item={item} />;
        })}
      </>
    );
  };
