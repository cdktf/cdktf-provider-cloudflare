// https://registry.terraform.io/providers/cloudflare/cloudflare/4.5.0/docs/resources/address_map
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AddressMapConfig extends cdktf.TerraformMetaArguments {
  /**
  * The account identifier to target for the resource.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.5.0/docs/resources/address_map#account_id AddressMap#account_id}
  */
  readonly accountId: string;
  /**
  * If you have legacy TLS clients which do not send the TLS server name indicator, then you can specify one default SNI on the map.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.5.0/docs/resources/address_map#default_sni AddressMap#default_sni}
  */
  readonly defaultSni?: string;
  /**
  * Description of the address map.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.5.0/docs/resources/address_map#description AddressMap#description}
  */
  readonly description?: string;
  /**
  * Whether the Address Map is enabled or not.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.5.0/docs/resources/address_map#enabled AddressMap#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.5.0/docs/resources/address_map#id AddressMap#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * ips block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.5.0/docs/resources/address_map#ips AddressMap#ips}
  */
  readonly ips?: AddressMapIps[] | cdktf.IResolvable;
  /**
  * memberships block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.5.0/docs/resources/address_map#memberships AddressMap#memberships}
  */
  readonly memberships?: AddressMapMemberships[] | cdktf.IResolvable;
}
export interface AddressMapIps {
  /**
  * An IPv4 or IPv6 address.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.5.0/docs/resources/address_map#ip AddressMap#ip}
  */
  readonly ip: string;
}

export function addressMapIpsToTerraform(struct?: AddressMapIps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip: cdktf.stringToTerraform(struct!.ip),
  }
}

export class AddressMapIpsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): AddressMapIps | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ip !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AddressMapIps | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ip = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ip = value.ip;
    }
  }

  // ip - computed: false, optional: false, required: true
  private _ip?: string; 
  public get ip() {
    return this.getStringAttribute('ip');
  }
  public set ip(value: string) {
    this._ip = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip;
  }
}

export class AddressMapIpsList extends cdktf.ComplexList {
  public internalValue? : AddressMapIps[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): AddressMapIpsOutputReference {
    return new AddressMapIpsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AddressMapMemberships {
  /**
  * Identifier of the account or zone.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.5.0/docs/resources/address_map#identifier AddressMap#identifier}
  */
  readonly identifier: string;
  /**
  * The type of the membership.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.5.0/docs/resources/address_map#kind AddressMap#kind}
  */
  readonly kind: string;
}

export function addressMapMembershipsToTerraform(struct?: AddressMapMemberships | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    identifier: cdktf.stringToTerraform(struct!.identifier),
    kind: cdktf.stringToTerraform(struct!.kind),
  }
}

export class AddressMapMembershipsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): AddressMapMemberships | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._identifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.identifier = this._identifier;
    }
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AddressMapMemberships | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._identifier = undefined;
      this._kind = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._identifier = value.identifier;
      this._kind = value.kind;
    }
  }

  // can_delete - computed: true, optional: false, required: false
  public get canDelete() {
    return this.getBooleanAttribute('can_delete');
  }

  // identifier - computed: false, optional: false, required: true
  private _identifier?: string; 
  public get identifier() {
    return this.getStringAttribute('identifier');
  }
  public set identifier(value: string) {
    this._identifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get identifierInput() {
    return this._identifier;
  }

  // kind - computed: false, optional: false, required: true
  private _kind?: string; 
  public get kind() {
    return this.getStringAttribute('kind');
  }
  public set kind(value: string) {
    this._kind = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kindInput() {
    return this._kind;
  }
}

export class AddressMapMembershipsList extends cdktf.ComplexList {
  public internalValue? : AddressMapMemberships[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): AddressMapMembershipsOutputReference {
    return new AddressMapMembershipsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.5.0/docs/resources/address_map cloudflare_address_map}
*/
export class AddressMap extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_address_map";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.5.0/docs/resources/address_map cloudflare_address_map} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AddressMapConfig
  */
  public constructor(scope: Construct, id: string, config: AddressMapConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_address_map',
      terraformGeneratorMetadata: {
        providerName: 'cloudflare',
        providerVersion: '4.5.0',
        providerVersionConstraint: '~> 4.3'
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
    this._defaultSni = config.defaultSni;
    this._description = config.description;
    this._enabled = config.enabled;
    this._id = config.id;
    this._ips.internalValue = config.ips;
    this._memberships.internalValue = config.memberships;
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

  // can_delete - computed: true, optional: false, required: false
  public get canDelete() {
    return this.getBooleanAttribute('can_delete');
  }

  // can_modify_ips - computed: true, optional: false, required: false
  public get canModifyIps() {
    return this.getBooleanAttribute('can_modify_ips');
  }

  // default_sni - computed: false, optional: true, required: false
  private _defaultSni?: string; 
  public get defaultSni() {
    return this.getStringAttribute('default_sni');
  }
  public set defaultSni(value: string) {
    this._defaultSni = value;
  }
  public resetDefaultSni() {
    this._defaultSni = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultSniInput() {
    return this._defaultSni;
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

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // ips - computed: false, optional: true, required: false
  private _ips = new AddressMapIpsList(this, "ips", true);
  public get ips() {
    return this._ips;
  }
  public putIps(value: AddressMapIps[] | cdktf.IResolvable) {
    this._ips.internalValue = value;
  }
  public resetIps() {
    this._ips.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsInput() {
    return this._ips.internalValue;
  }

  // memberships - computed: false, optional: true, required: false
  private _memberships = new AddressMapMembershipsList(this, "memberships", true);
  public get memberships() {
    return this._memberships;
  }
  public putMemberships(value: AddressMapMemberships[] | cdktf.IResolvable) {
    this._memberships.internalValue = value;
  }
  public resetMemberships() {
    this._memberships.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get membershipsInput() {
    return this._memberships.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.stringToTerraform(this._accountId),
      default_sni: cdktf.stringToTerraform(this._defaultSni),
      description: cdktf.stringToTerraform(this._description),
      enabled: cdktf.booleanToTerraform(this._enabled),
      id: cdktf.stringToTerraform(this._id),
      ips: cdktf.listMapper(addressMapIpsToTerraform, true)(this._ips.internalValue),
      memberships: cdktf.listMapper(addressMapMembershipsToTerraform, true)(this._memberships.internalValue),
    };
  }
}
