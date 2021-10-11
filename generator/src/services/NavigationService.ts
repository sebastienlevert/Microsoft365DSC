import { INavLinkGroup } from '@fluentui/react';

export async function getNavigationItems(): Promise<INavLinkGroup[]> {
  let navigationItems: INavLinkGroup[] = [
    {
      links: [
        {
          name: 'Home',
          url: '#/',
          icon: 'Home',
          key: 'home'
        },
        {
          name: 'Import Configuration',
          url: '#/import',
          icon: 'Trophy2',
          key: 'import'
        },
        {
          name: 'Configuration Designer',
          url: '#/designer',
          icon: 'Design',
          key: 'designer'
        },
        {
          name: 'Export Configuration',
          url: '#/export',
          icon: 'Dataflows',
          key: 'export'
        },
        {
          name: 'Configuration Drifts',
          url: '#/drifts',
          icon: 'Warning',
          key: 'drifts'
        },
        {
          name: 'Reports',
          url: '#/reports',
          icon: 'LineChart',
          key: 'reports'
        },
        {
          name: 'Assessments',
          url: '#/assessments',
          icon: 'ComplianceAudit',
          key: 'assessments'
        },
        {
          name: 'Inventory',
          url: '#/inventory',
          icon: 'Archive',
          key: 'inventory'
        }
      ]
    },
    {
      links: [
        {
          name: 'CI/CD Integration',
          url: '#/integrations',
          icon: 'AppIconDefaultAdd',
          key: 'integrations'
        },
        {
          name: 'Blueprint Gallery',
          url: '#/blueprint',
          icon: 'AppIconDefaultAdd',
          key: 'blueprint'
        }
      ]
    },
    {
      links: [
        {
          name: 'Settings',
          url: '#/settings',
          icon: 'Settings',
          key: 'settings'
        }
      ]
    }
  ];

  return new Promise<INavLinkGroup[]>((resolve, reject) => {
    resolve(navigationItems);
  });
}
