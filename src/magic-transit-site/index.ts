// https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/magic_transit_site
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MagicTransitSiteConfig extends cdktf.TerraformMetaArguments {
  /**
  * Identifier
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/magic_transit_site#account_id MagicTransitSite#account_id}
  */
  readonly accountId: string;
  /**
  * Magic Connector identifier tag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/magic_transit_site#connector_id MagicTransitSite#connector_id}
  */
  readonly connectorId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/magic_transit_site#description MagicTransitSite#description}
  */
  readonly description?: string;
  /**
  * Site high availability mode. If set to true, the site can have two connectors and runs in high availability mode.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/magic_transit_site#ha_mode MagicTransitSite#ha_mode}
  */
  readonly haMode?: boolean | cdktf.IResolvable;
  /**
  * Location of site in latitude and longitude.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/magic_transit_site#location MagicTransitSite#location}
  */
  readonly location?: MagicTransitSiteLocation;
  /**
  * The name of the site.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/magic_transit_site#name MagicTransitSite#name}
  */
  readonly name: string;
  /**
  * Magic Connector identifier tag. Used when high availability mode is on.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/magic_transit_site#secondary_connector_id MagicTransitSite#secondary_connector_id}
  */
  readonly secondaryConnectorId?: string;
}
export interface MagicTransitSiteLocation {
  /**
  * Latitude
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/magic_transit_site#lat MagicTransitSite#lat}
  */
  readonly lat?: string;
  /**
  * Longitude
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/magic_transit_site#lon MagicTransitSite#lon}
  */
  readonly lon?: string;
}

export function magicTransitSiteLocationToTerraform(struct?: MagicTransitSiteLocation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    lat: cdktf.stringToTerraform(struct!.lat),
    lon: cdktf.stringToTerraform(struct!.lon),
  }
}


export function magicTransitSiteLocationToHclTerraform(struct?: MagicTransitSiteLocation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    lat: {
      value: cdktf.stringToHclTerraform(struct!.lat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lon: {
      value: cdktf.stringToHclTerraform(struct!.lon),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MagicTransitSiteLocationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MagicTransitSiteLocation | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._lat !== undefined) {
      hasAnyValues = true;
      internalValueResult.lat = this._lat;
    }
    if (this._lon !== undefined) {
      hasAnyValues = true;
      internalValueResult.lon = this._lon;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MagicTransitSiteLocation | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._lat = undefined;
      this._lon = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._lat = value.lat;
      this._lon = value.lon;
    }
  }

  // lat - computed: true, optional: true, required: false
  private _lat?: string; 
  public get lat() {
    return this.getStringAttribute('lat');
  }
  public set lat(value: string) {
    this._lat = value;
  }
  public resetLat() {
    this._lat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get latInput() {
    return this._lat;
  }

  // lon - computed: true, optional: true, required: false
  private _lon?: string; 
  public get lon() {
    return this.getStringAttribute('lon');
  }
  public set lon(value: string) {
    this._lon = value;
  }
  public resetLon() {
    this._lon = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lonInput() {
    return this._lon;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/magic_transit_site cloudflare_magic_transit_site}
*/
export class MagicTransitSite extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_magic_transit_site";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MagicTransitSite resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MagicTransitSite to import
  * @param importFromId The id of the existing MagicTransitSite that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/magic_transit_site#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MagicTransitSite to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_magic_transit_site", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/magic_transit_site cloudflare_magic_transit_site} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MagicTransitSiteConfig
  */
  public constructor(scope: Construct, id: string, config: MagicTransitSiteConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_magic_transit_site',
      terraformGeneratorMetadata: {
        providerName: 'cloudflare',
        providerVersion: '5.0.0',
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
    this._connectorId = config.connectorId;
    this._description = config.description;
    this._haMode = config.haMode;
    this._location.internalValue = config.location;
    this._name = config.name;
    this._secondaryConnectorId = config.secondaryConnectorId;
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

  // connector_id - computed: false, optional: true, required: false
  private _connectorId?: string; 
  public get connectorId() {
    return this.getStringAttribute('connector_id');
  }
  public set connectorId(value: string) {
    this._connectorId = value;
  }
  public resetConnectorId() {
    this._connectorId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectorIdInput() {
    return this._connectorId;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // ha_mode - computed: false, optional: true, required: false
  private _haMode?: boolean | cdktf.IResolvable; 
  public get haMode() {
    return this.getBooleanAttribute('ha_mode');
  }
  public set haMode(value: boolean | cdktf.IResolvable) {
    this._haMode = value;
  }
  public resetHaMode() {
    this._haMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get haModeInput() {
    return this._haMode;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // location - computed: true, optional: true, required: false
  private _location = new MagicTransitSiteLocationOutputReference(this, "location");
  public get location() {
    return this._location;
  }
  public putLocation(value: MagicTransitSiteLocation) {
    this._location.internalValue = value;
  }
  public resetLocation() {
    this._location.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location.internalValue;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // secondary_connector_id - computed: false, optional: true, required: false
  private _secondaryConnectorId?: string; 
  public get secondaryConnectorId() {
    return this.getStringAttribute('secondary_connector_id');
  }
  public set secondaryConnectorId(value: string) {
    this._secondaryConnectorId = value;
  }
  public resetSecondaryConnectorId() {
    this._secondaryConnectorId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryConnectorIdInput() {
    return this._secondaryConnectorId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.stringToTerraform(this._accountId),
      connector_id: cdktf.stringToTerraform(this._connectorId),
      description: cdktf.stringToTerraform(this._description),
      ha_mode: cdktf.booleanToTerraform(this._haMode),
      location: magicTransitSiteLocationToTerraform(this._location.internalValue),
      name: cdktf.stringToTerraform(this._name),
      secondary_connector_id: cdktf.stringToTerraform(this._secondaryConnectorId),
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
      connector_id: {
        value: cdktf.stringToHclTerraform(this._connectorId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ha_mode: {
        value: cdktf.booleanToHclTerraform(this._haMode),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      location: {
        value: magicTransitSiteLocationToHclTerraform(this._location.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "MagicTransitSiteLocation",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      secondary_connector_id: {
        value: cdktf.stringToHclTerraform(this._secondaryConnectorId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
