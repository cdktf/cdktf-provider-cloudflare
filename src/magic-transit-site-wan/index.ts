// https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/magic_transit_site_wan
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MagicTransitSiteWanConfig extends cdktf.TerraformMetaArguments {
  /**
  * Identifier
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/magic_transit_site_wan#account_id MagicTransitSiteWan#account_id}
  */
  readonly accountId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/magic_transit_site_wan#name MagicTransitSiteWan#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/magic_transit_site_wan#physport MagicTransitSiteWan#physport}
  */
  readonly physport: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/magic_transit_site_wan#priority MagicTransitSiteWan#priority}
  */
  readonly priority?: number;
  /**
  * Identifier
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/magic_transit_site_wan#site_id MagicTransitSiteWan#site_id}
  */
  readonly siteId: string;
  /**
  * (optional) if omitted, use DHCP. Submit secondary_address when site is in high availability mode.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/magic_transit_site_wan#static_addressing MagicTransitSiteWan#static_addressing}
  */
  readonly staticAddressing?: MagicTransitSiteWanStaticAddressing;
  /**
  * VLAN ID. Use zero for untagged.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/magic_transit_site_wan#vlan_tag MagicTransitSiteWan#vlan_tag}
  */
  readonly vlanTag?: number;
}
export interface MagicTransitSiteWanStaticAddressing {
  /**
  * A valid CIDR notation representing an IP range.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/magic_transit_site_wan#address MagicTransitSiteWan#address}
  */
  readonly address: string;
  /**
  * A valid IPv4 address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/magic_transit_site_wan#gateway_address MagicTransitSiteWan#gateway_address}
  */
  readonly gatewayAddress: string;
  /**
  * A valid CIDR notation representing an IP range.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/magic_transit_site_wan#secondary_address MagicTransitSiteWan#secondary_address}
  */
  readonly secondaryAddress?: string;
}

export function magicTransitSiteWanStaticAddressingToTerraform(struct?: MagicTransitSiteWanStaticAddressing | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    gateway_address: cdktf.stringToTerraform(struct!.gatewayAddress),
    secondary_address: cdktf.stringToTerraform(struct!.secondaryAddress),
  }
}


export function magicTransitSiteWanStaticAddressingToHclTerraform(struct?: MagicTransitSiteWanStaticAddressing | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    address: {
      value: cdktf.stringToHclTerraform(struct!.address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gateway_address: {
      value: cdktf.stringToHclTerraform(struct!.gatewayAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secondary_address: {
      value: cdktf.stringToHclTerraform(struct!.secondaryAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MagicTransitSiteWanStaticAddressingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MagicTransitSiteWanStaticAddressing | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    if (this._gatewayAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.gatewayAddress = this._gatewayAddress;
    }
    if (this._secondaryAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.secondaryAddress = this._secondaryAddress;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MagicTransitSiteWanStaticAddressing | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._address = undefined;
      this._gatewayAddress = undefined;
      this._secondaryAddress = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._address = value.address;
      this._gatewayAddress = value.gatewayAddress;
      this._secondaryAddress = value.secondaryAddress;
    }
  }

  // address - computed: false, optional: false, required: true
  private _address?: string; 
  public get address() {
    return this.getStringAttribute('address');
  }
  public set address(value: string) {
    this._address = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
  }

  // gateway_address - computed: false, optional: false, required: true
  private _gatewayAddress?: string; 
  public get gatewayAddress() {
    return this.getStringAttribute('gateway_address');
  }
  public set gatewayAddress(value: string) {
    this._gatewayAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayAddressInput() {
    return this._gatewayAddress;
  }

  // secondary_address - computed: false, optional: true, required: false
  private _secondaryAddress?: string; 
  public get secondaryAddress() {
    return this.getStringAttribute('secondary_address');
  }
  public set secondaryAddress(value: string) {
    this._secondaryAddress = value;
  }
  public resetSecondaryAddress() {
    this._secondaryAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryAddressInput() {
    return this._secondaryAddress;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/magic_transit_site_wan cloudflare_magic_transit_site_wan}
*/
export class MagicTransitSiteWan extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_magic_transit_site_wan";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MagicTransitSiteWan resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MagicTransitSiteWan to import
  * @param importFromId The id of the existing MagicTransitSiteWan that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/magic_transit_site_wan#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MagicTransitSiteWan to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_magic_transit_site_wan", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/magic_transit_site_wan cloudflare_magic_transit_site_wan} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MagicTransitSiteWanConfig
  */
  public constructor(scope: Construct, id: string, config: MagicTransitSiteWanConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_magic_transit_site_wan',
      terraformGeneratorMetadata: {
        providerName: 'cloudflare',
        providerVersion: '5.4.0',
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
    this._name = config.name;
    this._physport = config.physport;
    this._priority = config.priority;
    this._siteId = config.siteId;
    this._staticAddressing.internalValue = config.staticAddressing;
    this._vlanTag = config.vlanTag;
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

  // health_check_rate - computed: true, optional: false, required: false
  public get healthCheckRate() {
    return this.getStringAttribute('health_check_rate');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // physport - computed: false, optional: false, required: true
  private _physport?: number; 
  public get physport() {
    return this.getNumberAttribute('physport');
  }
  public set physport(value: number) {
    this._physport = value;
  }
  // Temporarily expose input value. Use with caution.
  public get physportInput() {
    return this._physport;
  }

  // priority - computed: false, optional: true, required: false
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // site_id - computed: false, optional: false, required: true
  private _siteId?: string; 
  public get siteId() {
    return this.getStringAttribute('site_id');
  }
  public set siteId(value: string) {
    this._siteId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get siteIdInput() {
    return this._siteId;
  }

  // static_addressing - computed: false, optional: true, required: false
  private _staticAddressing = new MagicTransitSiteWanStaticAddressingOutputReference(this, "static_addressing");
  public get staticAddressing() {
    return this._staticAddressing;
  }
  public putStaticAddressing(value: MagicTransitSiteWanStaticAddressing) {
    this._staticAddressing.internalValue = value;
  }
  public resetStaticAddressing() {
    this._staticAddressing.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticAddressingInput() {
    return this._staticAddressing.internalValue;
  }

  // vlan_tag - computed: false, optional: true, required: false
  private _vlanTag?: number; 
  public get vlanTag() {
    return this.getNumberAttribute('vlan_tag');
  }
  public set vlanTag(value: number) {
    this._vlanTag = value;
  }
  public resetVlanTag() {
    this._vlanTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanTagInput() {
    return this._vlanTag;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.stringToTerraform(this._accountId),
      name: cdktf.stringToTerraform(this._name),
      physport: cdktf.numberToTerraform(this._physport),
      priority: cdktf.numberToTerraform(this._priority),
      site_id: cdktf.stringToTerraform(this._siteId),
      static_addressing: magicTransitSiteWanStaticAddressingToTerraform(this._staticAddressing.internalValue),
      vlan_tag: cdktf.numberToTerraform(this._vlanTag),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      physport: {
        value: cdktf.numberToHclTerraform(this._physport),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      priority: {
        value: cdktf.numberToHclTerraform(this._priority),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      site_id: {
        value: cdktf.stringToHclTerraform(this._siteId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      static_addressing: {
        value: magicTransitSiteWanStaticAddressingToHclTerraform(this._staticAddressing.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "MagicTransitSiteWanStaticAddressing",
      },
      vlan_tag: {
        value: cdktf.numberToHclTerraform(this._vlanTag),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
