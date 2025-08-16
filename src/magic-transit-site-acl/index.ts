/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/magic_transit_site_acl
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MagicTransitSiteAclConfig extends cdktf.TerraformMetaArguments {
  /**
  * Identifier
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/magic_transit_site_acl#account_id MagicTransitSiteAcl#account_id}
  */
  readonly accountId: string;
  /**
  * Description for the ACL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/magic_transit_site_acl#description MagicTransitSiteAcl#description}
  */
  readonly description?: string;
  /**
  * The desired forwarding action for this ACL policy. If set to "false", the policy will forward traffic to Cloudflare. If set to "true", the policy will forward traffic locally on the Magic Connector. If not included in request, will default to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/magic_transit_site_acl#forward_locally MagicTransitSiteAcl#forward_locally}
  */
  readonly forwardLocally?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/magic_transit_site_acl#lan_1 MagicTransitSiteAcl#lan_1}
  */
  readonly lan1: MagicTransitSiteAclLan1;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/magic_transit_site_acl#lan_2 MagicTransitSiteAcl#lan_2}
  */
  readonly lan2: MagicTransitSiteAclLan2;
  /**
  * The name of the ACL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/magic_transit_site_acl#name MagicTransitSiteAcl#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/magic_transit_site_acl#protocols MagicTransitSiteAcl#protocols}
  */
  readonly protocols?: string[];
  /**
  * Identifier
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/magic_transit_site_acl#site_id MagicTransitSiteAcl#site_id}
  */
  readonly siteId: string;
  /**
  * The desired traffic direction for this ACL policy. If set to "false", the policy will allow bidirectional traffic. If set to "true", the policy will only allow traffic in one direction. If not included in request, will default to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/magic_transit_site_acl#unidirectional MagicTransitSiteAcl#unidirectional}
  */
  readonly unidirectional?: boolean | cdktf.IResolvable;
}
export interface MagicTransitSiteAclLan1 {
  /**
  * The identifier for the LAN you want to create an ACL policy with.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/magic_transit_site_acl#lan_id MagicTransitSiteAcl#lan_id}
  */
  readonly lanId: string;
  /**
  * The name of the LAN based on the provided lan_id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/magic_transit_site_acl#lan_name MagicTransitSiteAcl#lan_name}
  */
  readonly lanName?: string;
  /**
  * Array of port ranges on the provided LAN that will be included in the ACL. If no ports or port rangess are provided, communication on any port on this LAN is allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/magic_transit_site_acl#port_ranges MagicTransitSiteAcl#port_ranges}
  */
  readonly portRanges?: string[];
  /**
  * Array of ports on the provided LAN that will be included in the ACL. If no ports or port ranges are provided, communication on any port on this LAN is allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/magic_transit_site_acl#ports MagicTransitSiteAcl#ports}
  */
  readonly ports?: number[];
  /**
  * Array of subnet IPs within the LAN that will be included in the ACL. If no subnets are provided, communication on any subnets on this LAN are allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/magic_transit_site_acl#subnets MagicTransitSiteAcl#subnets}
  */
  readonly subnets?: string[];
}

export function magicTransitSiteAclLan1ToTerraform(struct?: MagicTransitSiteAclLan1 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    lan_id: cdktf.stringToTerraform(struct!.lanId),
    lan_name: cdktf.stringToTerraform(struct!.lanName),
    port_ranges: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.portRanges),
    ports: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.ports),
    subnets: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.subnets),
  }
}


export function magicTransitSiteAclLan1ToHclTerraform(struct?: MagicTransitSiteAclLan1 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    lan_id: {
      value: cdktf.stringToHclTerraform(struct!.lanId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lan_name: {
      value: cdktf.stringToHclTerraform(struct!.lanName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port_ranges: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.portRanges),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    ports: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.ports),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
    subnets: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.subnets),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MagicTransitSiteAclLan1OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MagicTransitSiteAclLan1 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._lanId !== undefined) {
      hasAnyValues = true;
      internalValueResult.lanId = this._lanId;
    }
    if (this._lanName !== undefined) {
      hasAnyValues = true;
      internalValueResult.lanName = this._lanName;
    }
    if (this._portRanges !== undefined) {
      hasAnyValues = true;
      internalValueResult.portRanges = this._portRanges;
    }
    if (this._ports !== undefined) {
      hasAnyValues = true;
      internalValueResult.ports = this._ports;
    }
    if (this._subnets !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnets = this._subnets;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MagicTransitSiteAclLan1 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._lanId = undefined;
      this._lanName = undefined;
      this._portRanges = undefined;
      this._ports = undefined;
      this._subnets = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._lanId = value.lanId;
      this._lanName = value.lanName;
      this._portRanges = value.portRanges;
      this._ports = value.ports;
      this._subnets = value.subnets;
    }
  }

  // lan_id - computed: false, optional: false, required: true
  private _lanId?: string; 
  public get lanId() {
    return this.getStringAttribute('lan_id');
  }
  public set lanId(value: string) {
    this._lanId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get lanIdInput() {
    return this._lanId;
  }

  // lan_name - computed: false, optional: true, required: false
  private _lanName?: string; 
  public get lanName() {
    return this.getStringAttribute('lan_name');
  }
  public set lanName(value: string) {
    this._lanName = value;
  }
  public resetLanName() {
    this._lanName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lanNameInput() {
    return this._lanName;
  }

  // port_ranges - computed: false, optional: true, required: false
  private _portRanges?: string[]; 
  public get portRanges() {
    return this.getListAttribute('port_ranges');
  }
  public set portRanges(value: string[]) {
    this._portRanges = value;
  }
  public resetPortRanges() {
    this._portRanges = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portRangesInput() {
    return this._portRanges;
  }

  // ports - computed: false, optional: true, required: false
  private _ports?: number[]; 
  public get ports() {
    return this.getNumberListAttribute('ports');
  }
  public set ports(value: number[]) {
    this._ports = value;
  }
  public resetPorts() {
    this._ports = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portsInput() {
    return this._ports;
  }

  // subnets - computed: false, optional: true, required: false
  private _subnets?: string[]; 
  public get subnets() {
    return this.getListAttribute('subnets');
  }
  public set subnets(value: string[]) {
    this._subnets = value;
  }
  public resetSubnets() {
    this._subnets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetsInput() {
    return this._subnets;
  }
}
export interface MagicTransitSiteAclLan2 {
  /**
  * The identifier for the LAN you want to create an ACL policy with.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/magic_transit_site_acl#lan_id MagicTransitSiteAcl#lan_id}
  */
  readonly lanId: string;
  /**
  * The name of the LAN based on the provided lan_id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/magic_transit_site_acl#lan_name MagicTransitSiteAcl#lan_name}
  */
  readonly lanName?: string;
  /**
  * Array of port ranges on the provided LAN that will be included in the ACL. If no ports or port rangess are provided, communication on any port on this LAN is allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/magic_transit_site_acl#port_ranges MagicTransitSiteAcl#port_ranges}
  */
  readonly portRanges?: string[];
  /**
  * Array of ports on the provided LAN that will be included in the ACL. If no ports or port ranges are provided, communication on any port on this LAN is allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/magic_transit_site_acl#ports MagicTransitSiteAcl#ports}
  */
  readonly ports?: number[];
  /**
  * Array of subnet IPs within the LAN that will be included in the ACL. If no subnets are provided, communication on any subnets on this LAN are allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/magic_transit_site_acl#subnets MagicTransitSiteAcl#subnets}
  */
  readonly subnets?: string[];
}

export function magicTransitSiteAclLan2ToTerraform(struct?: MagicTransitSiteAclLan2 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    lan_id: cdktf.stringToTerraform(struct!.lanId),
    lan_name: cdktf.stringToTerraform(struct!.lanName),
    port_ranges: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.portRanges),
    ports: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.ports),
    subnets: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.subnets),
  }
}


export function magicTransitSiteAclLan2ToHclTerraform(struct?: MagicTransitSiteAclLan2 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    lan_id: {
      value: cdktf.stringToHclTerraform(struct!.lanId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lan_name: {
      value: cdktf.stringToHclTerraform(struct!.lanName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port_ranges: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.portRanges),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    ports: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.ports),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
    subnets: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.subnets),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MagicTransitSiteAclLan2OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MagicTransitSiteAclLan2 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._lanId !== undefined) {
      hasAnyValues = true;
      internalValueResult.lanId = this._lanId;
    }
    if (this._lanName !== undefined) {
      hasAnyValues = true;
      internalValueResult.lanName = this._lanName;
    }
    if (this._portRanges !== undefined) {
      hasAnyValues = true;
      internalValueResult.portRanges = this._portRanges;
    }
    if (this._ports !== undefined) {
      hasAnyValues = true;
      internalValueResult.ports = this._ports;
    }
    if (this._subnets !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnets = this._subnets;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MagicTransitSiteAclLan2 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._lanId = undefined;
      this._lanName = undefined;
      this._portRanges = undefined;
      this._ports = undefined;
      this._subnets = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._lanId = value.lanId;
      this._lanName = value.lanName;
      this._portRanges = value.portRanges;
      this._ports = value.ports;
      this._subnets = value.subnets;
    }
  }

  // lan_id - computed: false, optional: false, required: true
  private _lanId?: string; 
  public get lanId() {
    return this.getStringAttribute('lan_id');
  }
  public set lanId(value: string) {
    this._lanId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get lanIdInput() {
    return this._lanId;
  }

  // lan_name - computed: false, optional: true, required: false
  private _lanName?: string; 
  public get lanName() {
    return this.getStringAttribute('lan_name');
  }
  public set lanName(value: string) {
    this._lanName = value;
  }
  public resetLanName() {
    this._lanName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lanNameInput() {
    return this._lanName;
  }

  // port_ranges - computed: false, optional: true, required: false
  private _portRanges?: string[]; 
  public get portRanges() {
    return this.getListAttribute('port_ranges');
  }
  public set portRanges(value: string[]) {
    this._portRanges = value;
  }
  public resetPortRanges() {
    this._portRanges = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portRangesInput() {
    return this._portRanges;
  }

  // ports - computed: false, optional: true, required: false
  private _ports?: number[]; 
  public get ports() {
    return this.getNumberListAttribute('ports');
  }
  public set ports(value: number[]) {
    this._ports = value;
  }
  public resetPorts() {
    this._ports = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portsInput() {
    return this._ports;
  }

  // subnets - computed: false, optional: true, required: false
  private _subnets?: string[]; 
  public get subnets() {
    return this.getListAttribute('subnets');
  }
  public set subnets(value: string[]) {
    this._subnets = value;
  }
  public resetSubnets() {
    this._subnets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetsInput() {
    return this._subnets;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/magic_transit_site_acl cloudflare_magic_transit_site_acl}
*/
export class MagicTransitSiteAcl extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_magic_transit_site_acl";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MagicTransitSiteAcl resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MagicTransitSiteAcl to import
  * @param importFromId The id of the existing MagicTransitSiteAcl that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/magic_transit_site_acl#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MagicTransitSiteAcl to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_magic_transit_site_acl", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/magic_transit_site_acl cloudflare_magic_transit_site_acl} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MagicTransitSiteAclConfig
  */
  public constructor(scope: Construct, id: string, config: MagicTransitSiteAclConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_magic_transit_site_acl',
      terraformGeneratorMetadata: {
        providerName: 'cloudflare',
        providerVersion: '5.8.4',
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
    this._description = config.description;
    this._forwardLocally = config.forwardLocally;
    this._lan1.internalValue = config.lan1;
    this._lan2.internalValue = config.lan2;
    this._name = config.name;
    this._protocols = config.protocols;
    this._siteId = config.siteId;
    this._unidirectional = config.unidirectional;
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

  // forward_locally - computed: false, optional: true, required: false
  private _forwardLocally?: boolean | cdktf.IResolvable; 
  public get forwardLocally() {
    return this.getBooleanAttribute('forward_locally');
  }
  public set forwardLocally(value: boolean | cdktf.IResolvable) {
    this._forwardLocally = value;
  }
  public resetForwardLocally() {
    this._forwardLocally = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardLocallyInput() {
    return this._forwardLocally;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // lan_1 - computed: false, optional: false, required: true
  private _lan1 = new MagicTransitSiteAclLan1OutputReference(this, "lan_1");
  public get lan1() {
    return this._lan1;
  }
  public putLan1(value: MagicTransitSiteAclLan1) {
    this._lan1.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get lan1Input() {
    return this._lan1.internalValue;
  }

  // lan_2 - computed: false, optional: false, required: true
  private _lan2 = new MagicTransitSiteAclLan2OutputReference(this, "lan_2");
  public get lan2() {
    return this._lan2;
  }
  public putLan2(value: MagicTransitSiteAclLan2) {
    this._lan2.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get lan2Input() {
    return this._lan2.internalValue;
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

  // protocols - computed: false, optional: true, required: false
  private _protocols?: string[]; 
  public get protocols() {
    return this.getListAttribute('protocols');
  }
  public set protocols(value: string[]) {
    this._protocols = value;
  }
  public resetProtocols() {
    this._protocols = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolsInput() {
    return this._protocols;
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

  // unidirectional - computed: false, optional: true, required: false
  private _unidirectional?: boolean | cdktf.IResolvable; 
  public get unidirectional() {
    return this.getBooleanAttribute('unidirectional');
  }
  public set unidirectional(value: boolean | cdktf.IResolvable) {
    this._unidirectional = value;
  }
  public resetUnidirectional() {
    this._unidirectional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unidirectionalInput() {
    return this._unidirectional;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.stringToTerraform(this._accountId),
      description: cdktf.stringToTerraform(this._description),
      forward_locally: cdktf.booleanToTerraform(this._forwardLocally),
      lan_1: magicTransitSiteAclLan1ToTerraform(this._lan1.internalValue),
      lan_2: magicTransitSiteAclLan2ToTerraform(this._lan2.internalValue),
      name: cdktf.stringToTerraform(this._name),
      protocols: cdktf.listMapper(cdktf.stringToTerraform, false)(this._protocols),
      site_id: cdktf.stringToTerraform(this._siteId),
      unidirectional: cdktf.booleanToTerraform(this._unidirectional),
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
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      forward_locally: {
        value: cdktf.booleanToHclTerraform(this._forwardLocally),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      lan_1: {
        value: magicTransitSiteAclLan1ToHclTerraform(this._lan1.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "MagicTransitSiteAclLan1",
      },
      lan_2: {
        value: magicTransitSiteAclLan2ToHclTerraform(this._lan2.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "MagicTransitSiteAclLan2",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      protocols: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._protocols),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      site_id: {
        value: cdktf.stringToHclTerraform(this._siteId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      unidirectional: {
        value: cdktf.booleanToHclTerraform(this._unidirectional),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
