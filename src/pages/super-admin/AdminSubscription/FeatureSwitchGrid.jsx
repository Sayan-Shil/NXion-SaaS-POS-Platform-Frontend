import { Switch } from '@/components/ui/switch';
import { Field } from 'formik';
import React from 'react'
const FEATURE_FIELDS = [
  { key: 'enableAdvancedReports', label: 'Advanced Reports' },
  { key: 'enableInventory', label: 'Inventory System' },
  { key: 'enableIntegrations', label: 'Integrations' },
  { key: 'enableEcommerce', label: 'eCommerce' },
  { key: 'enableInvoiceBranding', label: 'Invoice Branding' },
  { key: 'prioritySupport', label: 'Priority Support' },
  { key: 'enableMultiLocation', label: 'Multi-location' },
];
function FeatureSwitchGrid({ handleFeatureSwitch }) {
  return (
    <div className='grid grid-cols-2 gap-2'>
      {FEATURE_FIELDS.map((item) => (
        <label key={item.key} className="flex items-center gap-2">
          <Field name={item.key}>
            {({ field }) => (
              <Switch
                checked={field.value}
                // val is a boolean (true/false)
                onCheckedChange={(checked) => handleFeatureSwitch(item.key, checked)}
              />
            )}
          </Field>
          <span>{item.label}</span>
        </label>
      ))}
     
    </div>
  )
}

export default FeatureSwitchGrid