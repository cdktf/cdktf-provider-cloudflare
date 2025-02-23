// https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/dns_settings_internal_view
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataCloudflareDnsSettingsInternalViewConfig extends cdktf.TerraformMetaArguments {
  /**
  * Identifier
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/dns_settings_internal_view#account_id DataCloudflareDnsSettingsInternalView#account_id}
  */
  readonly accountId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/dns_settings_internal_view#filter DataCloudflareDnsSettingsInternalView#filter}
  */
  readonly filter?: DataCloudflareDnsSettingsInternalViewFilter;
  /**
  * Identifier
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/dns_settings_internal_view#view_id DataCloudflareDnsSettingsInternalView#view_id}
  */
  readonly viewId?: string;
}
export interface DataCloudflareDnsSettingsInternalViewFilterName {
  /**
  * Substring of the DNS view name.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/dns_settings_internal_view#contains DataCloudflareDnsSettingsInternalView#contains}
  */
  readonly contains?: string;
  /**
  * Suffix of the DNS view name.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/dns_settings_internal_view#endswith DataCloudflareDnsSettingsInternalView#endswith}
  */
  readonly endswith?: string;
  /**
  * Exact value of the DNS view name.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/dns_settings_internal_view#exact DataCloudflareDnsSettingsInternalView#exact}
  */
  readonly exact?: string;
  /**
  * Prefix of the DNS view name.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/dns_settings_internal_view#startswith DataCloudflareDnsSettingsInternalView#startswith}
  */
  readonly startswith?: string;
}

export function dataCloudflareDnsSettingsInternalViewFilterNameToTerraform(struct?: DataCloudflareDnsSettingsInternalViewFilterName | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    contains: cdktf.stringToTerraform(struct!.contains),
    endswith: cdktf.stringToTerraform(struct!.endswith),
    exact: cdktf.stringToTerraform(struct!.exact),
    startswith: cdktf.stringToTerraform(struct!.startswith),
  }
}


export function dataCloudflareDnsSettingsInternalViewFilterNameToHclTerraform(struct?: DataCloudflareDnsSettingsInternalViewFilterName | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    contains: {
      value: cdktf.stringToHclTerraform(struct!.contains),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    endswith: {
      value: cdktf.stringToHclTerraform(struct!.endswith),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    exact: {
      value: cdktf.stringToHclTerraform(struct!.exact),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    startswith: {
      value: cdktf.stringToHclTerraform(struct!.startswith),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataCloudflareDnsSettingsInternalViewFilterNameOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareDnsSettingsInternalViewFilterName | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contains !== undefined) {
      hasAnyValues = true;
      internalValueResult.contains = this._contains;
    }
    if (this._endswith !== undefined) {
      hasAnyValues = true;
      internalValueResult.endswith = this._endswith;
    }
    if (this._exact !== undefined) {
      hasAnyValues = true;
      internalValueResult.exact = this._exact;
    }
    if (this._startswith !== undefined) {
      hasAnyValues = true;
      internalValueResult.startswith = this._startswith;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareDnsSettingsInternalViewFilterName | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._contains = undefined;
      this._endswith = undefined;
      this._exact = undefined;
      this._startswith = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._contains = value.contains;
      this._endswith = value.endswith;
      this._exact = value.exact;
      this._startswith = value.startswith;
    }
  }

  // contains - computed: false, optional: true, required: false
  private _contains?: string; 
  public get contains() {
    return this.getStringAttribute('contains');
  }
  public set contains(value: string) {
    this._contains = value;
  }
  public resetContains() {
    this._contains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containsInput() {
    return this._contains;
  }

  // endswith - computed: false, optional: true, required: false
  private _endswith?: string; 
  public get endswith() {
    return this.getStringAttribute('endswith');
  }
  public set endswith(value: string) {
    this._endswith = value;
  }
  public resetEndswith() {
    this._endswith = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endswithInput() {
    return this._endswith;
  }

  // exact - computed: false, optional: true, required: false
  private _exact?: string; 
  public get exact() {
    return this.getStringAttribute('exact');
  }
  public set exact(value: string) {
    this._exact = value;
  }
  public resetExact() {
    this._exact = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exactInput() {
    return this._exact;
  }

  // startswith - computed: false, optional: true, required: false
  private _startswith?: string; 
  public get startswith() {
    return this.getStringAttribute('startswith');
  }
  public set startswith(value: string) {
    this._startswith = value;
  }
  public resetStartswith() {
    this._startswith = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startswithInput() {
    return this._startswith;
  }
}
export interface DataCloudflareDnsSettingsInternalViewFilter {
  /**
  * Direction to order DNS views in.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/dns_settings_internal_view#direction DataCloudflareDnsSettingsInternalView#direction}
  */
  readonly direction?: string;
  /**
  * Whether to match all search requirements or at least one (any). If set to `all`, acts like a logical AND between filters. If set to `any`, acts like a logical OR instead.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/dns_settings_internal_view#match DataCloudflareDnsSettingsInternalView#match}
  */
  readonly match?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/dns_settings_internal_view#name DataCloudflareDnsSettingsInternalView#name}
  */
  readonly name?: DataCloudflareDnsSettingsInternalViewFilterName;
  /**
  * Field to order DNS views by.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/dns_settings_internal_view#order DataCloudflareDnsSettingsInternalView#order}
  */
  readonly order?: string;
  /**
  * A zone ID that exists in the zones list for the view.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/dns_settings_internal_view#zone_id DataCloudflareDnsSettingsInternalView#zone_id}
  */
  readonly zoneId?: string;
  /**
  * A zone name that exists in the zones list for the view.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/dns_settings_internal_view#zone_name DataCloudflareDnsSettingsInternalView#zone_name}
  */
  readonly zoneName?: string;
}

export function dataCloudflareDnsSettingsInternalViewFilterToTerraform(struct?: DataCloudflareDnsSettingsInternalViewFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    direction: cdktf.stringToTerraform(struct!.direction),
    match: cdktf.stringToTerraform(struct!.match),
    name: dataCloudflareDnsSettingsInternalViewFilterNameToTerraform(struct!.name),
    order: cdktf.stringToTerraform(struct!.order),
    zone_id: cdktf.stringToTerraform(struct!.zoneId),
    zone_name: cdktf.stringToTerraform(struct!.zoneName),
  }
}


export function dataCloudflareDnsSettingsInternalViewFilterToHclTerraform(struct?: DataCloudflareDnsSettingsInternalViewFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    direction: {
      value: cdktf.stringToHclTerraform(struct!.direction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match: {
      value: cdktf.stringToHclTerraform(struct!.match),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: dataCloudflareDnsSettingsInternalViewFilterNameToHclTerraform(struct!.name),
      isBlock: true,
      type: "struct",
      storageClassType: "DataCloudflareDnsSettingsInternalViewFilterName",
    },
    order: {
      value: cdktf.stringToHclTerraform(struct!.order),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    zone_id: {
      value: cdktf.stringToHclTerraform(struct!.zoneId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    zone_name: {
      value: cdktf.stringToHclTerraform(struct!.zoneName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataCloudflareDnsSettingsInternalViewFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareDnsSettingsInternalViewFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._direction !== undefined) {
      hasAnyValues = true;
      internalValueResult.direction = this._direction;
    }
    if (this._match !== undefined) {
      hasAnyValues = true;
      internalValueResult.match = this._match;
    }
    if (this._name?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name?.internalValue;
    }
    if (this._order !== undefined) {
      hasAnyValues = true;
      internalValueResult.order = this._order;
    }
    if (this._zoneId !== undefined) {
      hasAnyValues = true;
      internalValueResult.zoneId = this._zoneId;
    }
    if (this._zoneName !== undefined) {
      hasAnyValues = true;
      internalValueResult.zoneName = this._zoneName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareDnsSettingsInternalViewFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._direction = undefined;
      this._match = undefined;
      this._name.internalValue = undefined;
      this._order = undefined;
      this._zoneId = undefined;
      this._zoneName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._direction = value.direction;
      this._match = value.match;
      this._name.internalValue = value.name;
      this._order = value.order;
      this._zoneId = value.zoneId;
      this._zoneName = value.zoneName;
    }
  }

  // direction - computed: true, optional: true, required: false
  private _direction?: string; 
  public get direction() {
    return this.getStringAttribute('direction');
  }
  public set direction(value: string) {
    this._direction = value;
  }
  public resetDirection() {
    this._direction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directionInput() {
    return this._direction;
  }

  // match - computed: true, optional: true, required: false
  private _match?: string; 
  public get match() {
    return this.getStringAttribute('match');
  }
  public set match(value: string) {
    this._match = value;
  }
  public resetMatch() {
    this._match = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchInput() {
    return this._match;
  }

  // name - computed: false, optional: true, required: false
  private _name = new DataCloudflareDnsSettingsInternalViewFilterNameOutputReference(this, "name");
  public get name() {
    return this._name;
  }
  public putName(value: DataCloudflareDnsSettingsInternalViewFilterName) {
    this._name.internalValue = value;
  }
  public resetName() {
    this._name.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name.internalValue;
  }

  // order - computed: false, optional: true, required: false
  private _order?: string; 
  public get order() {
    return this.getStringAttribute('order');
  }
  public set order(value: string) {
    this._order = value;
  }
  public resetOrder() {
    this._order = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orderInput() {
    return this._order;
  }

  // zone_id - computed: false, optional: true, required: false
  private _zoneId?: string; 
  public get zoneId() {
    return this.getStringAttribute('zone_id');
  }
  public set zoneId(value: string) {
    this._zoneId = value;
  }
  public resetZoneId() {
    this._zoneId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneIdInput() {
    return this._zoneId;
  }

  // zone_name - computed: false, optional: true, required: false
  private _zoneName?: string; 
  public get zoneName() {
    return this.getStringAttribute('zone_name');
  }
  public set zoneName(value: string) {
    this._zoneName = value;
  }
  public resetZoneName() {
    this._zoneName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneNameInput() {
    return this._zoneName;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/dns_settings_internal_view cloudflare_dns_settings_internal_view}
*/
export class DataCloudflareDnsSettingsInternalView extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_dns_settings_internal_view";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataCloudflareDnsSettingsInternalView resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataCloudflareDnsSettingsInternalView to import
  * @param importFromId The id of the existing DataCloudflareDnsSettingsInternalView that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/dns_settings_internal_view#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataCloudflareDnsSettingsInternalView to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_dns_settings_internal_view", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/dns_settings_internal_view cloudflare_dns_settings_internal_view} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataCloudflareDnsSettingsInternalViewConfig
  */
  public constructor(scope: Construct, id: string, config: DataCloudflareDnsSettingsInternalViewConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_dns_settings_internal_view',
      terraformGeneratorMetadata: {
        providerName: 'cloudflare',
        providerVersion: '5.1.0',
        providerVersionConstraint: '~> 5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accountId = config.accountId;
    this._filter.internalValue = config.filter;
    this._viewId = config.viewId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_id - computed: false, optional: false, required: true
  private _accountId?: string; 
  public get accountId() {
    return this.getStringAttribute('account_id');
  }
  public set accountId(value: string) {
    this._accountId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accountIdInput() {
    return this._accountId;
  }

  // created_time - computed: true, optional: false, required: false
  public get createdTime() {
    return this.getStringAttribute('created_time');
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new DataCloudflareDnsSettingsInternalViewFilterOutputReference(this, "filter");
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataCloudflareDnsSettingsInternalViewFilter) {
    this._filter.internalValue = value;
  }
  public resetFilter() {
    this._filter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // modified_time - computed: true, optional: false, required: false
  public get modifiedTime() {
    return this.getStringAttribute('modified_time');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // view_id - computed: false, optional: true, required: false
  private _viewId?: string; 
  public get viewId() {
    return this.getStringAttribute('view_id');
  }
  public set viewId(value: string) {
    this._viewId = value;
  }
  public resetViewId() {
    this._viewId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get viewIdInput() {
    return this._viewId;
  }

  // zones - computed: true, optional: false, required: false
  public get zones() {
    return this.getListAttribute('zones');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.stringToTerraform(this._accountId),
      filter: dataCloudflareDnsSettingsInternalViewFilterToTerraform(this._filter.internalValue),
      view_id: cdktf.stringToTerraform(this._viewId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      account_id: {
        value: cdktf.stringToHclTerraform(this._accountId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filter: {
        value: dataCloudflareDnsSettingsInternalViewFilterToHclTerraform(this._filter.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataCloudflareDnsSettingsInternalViewFilter",
      },
      view_id: {
        value: cdktf.stringToHclTerraform(this._viewId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
