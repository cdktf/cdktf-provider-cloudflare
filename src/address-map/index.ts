/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/address_map
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AddressMapConfig extends cdktf.TerraformMetaArguments {
  /**
  * Identifier of a Cloudflare account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/address_map#account_id AddressMap#account_id}
  */
  readonly accountId: string;
  /**
  * If you have legacy TLS clients which do not send the TLS server name indicator, then you can specify one default SNI on the map. If Cloudflare receives a TLS handshake from a client without an SNI, it will respond with the default SNI on those IPs. The default SNI can be any valid zone or subdomain owned by the account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/address_map#default_sni AddressMap#default_sni}
  */
  readonly defaultSni?: string;
  /**
  * An optional description field which may be used to describe the types of IPs or zones on the map.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/address_map#description AddressMap#description}
  */
  readonly description?: string;
  /**
  * Whether the Address Map is enabled or not. Cloudflare's DNS will not respond with IP addresses on an Address Map until the map is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/address_map#enabled AddressMap#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/address_map#ips AddressMap#ips}
  */
  readonly ips?: string[];
  /**
  * Zones and Accounts which will be assigned IPs on this Address Map. A zone membership will take priority over an account membership.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/address_map#memberships AddressMap#memberships}
  */
  readonly memberships?: AddressMapMemberships[] | cdktf.IResolvable;
}
export interface AddressMapMemberships {
  /**
  * The identifier for the membership (eg. a zone or account tag).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/address_map#identifier AddressMap#identifier}
  */
  readonly identifier?: string;
  /**
  * The type of the membership.
  * Available values: "zone", "account".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/address_map#kind AddressMap#kind}
  */
  readonly kind?: string;
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


export function addressMapMembershipsToHclTerraform(struct?: AddressMapMemberships | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    identifier: {
      value: cdktf.stringToHclTerraform(struct!.identifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kind: {
      value: cdktf.stringToHclTerraform(struct!.kind),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
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

  // identifier - computed: false, optional: true, required: false
  private _identifier?: string; 
  public get identifier() {
    return this.getStringAttribute('identifier');
  }
  public set identifier(value: string) {
    this._identifier = value;
  }
  public resetIdentifier() {
    this._identifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identifierInput() {
    return this._identifier;
  }

  // kind - computed: false, optional: true, required: false
  private _kind?: string; 
  public get kind() {
    return this.getStringAttribute('kind');
  }
  public set kind(value: string) {
    this._kind = value;
  }
  public resetKind() {
    this._kind = undefined;
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
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/address_map cloudflare_address_map}
*/
export class AddressMap extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_address_map";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AddressMap resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AddressMap to import
  * @param importFromId The id of the existing AddressMap that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/address_map#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AddressMap to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_address_map", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/address_map cloudflare_address_map} Resource
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
        providerVersion: '5.14.0',
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
    this._defaultSni = config.defaultSni;
    this._description = config.description;
    this._enabled = config.enabled;
    this._ips = config.ips;
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

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
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

  // enabled - computed: true, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ips - computed: false, optional: true, required: false
  private _ips?: string[]; 
  public get ips() {
    return this.getListAttribute('ips');
  }
  public set ips(value: string[]) {
    this._ips = value;
  }
  public resetIps() {
    this._ips = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsInput() {
    return this._ips;
  }

  // memberships - computed: false, optional: true, required: false
  private _memberships = new AddressMapMembershipsList(this, "memberships", false);
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

  // modified_at - computed: true, optional: false, required: false
  public get modifiedAt() {
    return this.getStringAttribute('modified_at');
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
      ips: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ips),
      memberships: cdktf.listMapper(addressMapMembershipsToTerraform, false)(this._memberships.internalValue),
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
      default_sni: {
        value: cdktf.stringToHclTerraform(this._defaultSni),
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
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ips: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ips),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      memberships: {
        value: cdktf.listMapperHcl(addressMapMembershipsToHclTerraform, false)(this._memberships.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AddressMapMembershipsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
