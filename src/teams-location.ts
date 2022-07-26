// https://www.terraform.io/docs/providers/cloudflare/r/teams_location
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TeamsLocationConfig extends cdktf.TerraformMetaArguments {
  /**
  * The account identifier to target for the resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/teams_location#account_id TeamsLocation#account_id}
  */
  readonly accountId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/teams_location#client_default TeamsLocation#client_default}
  */
  readonly clientDefault?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/teams_location#id TeamsLocation#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/teams_location#name TeamsLocation#name}
  */
  readonly name: string;
  /**
  * networks block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/teams_location#networks TeamsLocation#networks}
  */
  readonly networks?: TeamsLocationNetworks[] | cdktf.IResolvable;
}
export interface TeamsLocationNetworks {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/teams_location#network TeamsLocation#network}
  */
  readonly network: string;
}

export function teamsLocationNetworksToTerraform(struct?: TeamsLocationNetworks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    network: cdktf.stringToTerraform(struct!.network),
  }
}

export class TeamsLocationNetworksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TeamsLocationNetworks | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._network !== undefined) {
      hasAnyValues = true;
      internalValueResult.network = this._network;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TeamsLocationNetworks | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._network = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._network = value.network;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // network - computed: false, optional: false, required: true
  private _network?: string; 
  public get network() {
    return this.getStringAttribute('network');
  }
  public set network(value: string) {
    this._network = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInput() {
    return this._network;
  }
}

export class TeamsLocationNetworksList extends cdktf.ComplexList {
  public internalValue? : TeamsLocationNetworks[] | cdktf.IResolvable

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
  public get(index: number): TeamsLocationNetworksOutputReference {
    return new TeamsLocationNetworksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/cloudflare/r/teams_location cloudflare_teams_location}
*/
export class TeamsLocation extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_teams_location";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/cloudflare/r/teams_location cloudflare_teams_location} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TeamsLocationConfig
  */
  public constructor(scope: Construct, id: string, config: TeamsLocationConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_teams_location',
      terraformGeneratorMetadata: {
        providerName: 'cloudflare',
        providerVersion: '3.19.0',
        providerVersionConstraint: '~> 3.14'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._accountId = config.accountId;
    this._clientDefault = config.clientDefault;
    this._id = config.id;
    this._name = config.name;
    this._networks.internalValue = config.networks;
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

  // anonymized_logs_enabled - computed: true, optional: false, required: false
  public get anonymizedLogsEnabled() {
    return this.getBooleanAttribute('anonymized_logs_enabled');
  }

  // client_default - computed: false, optional: true, required: false
  private _clientDefault?: boolean | cdktf.IResolvable; 
  public get clientDefault() {
    return this.getBooleanAttribute('client_default');
  }
  public set clientDefault(value: boolean | cdktf.IResolvable) {
    this._clientDefault = value;
  }
  public resetClientDefault() {
    this._clientDefault = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientDefaultInput() {
    return this._clientDefault;
  }

  // doh_subdomain - computed: true, optional: false, required: false
  public get dohSubdomain() {
    return this.getStringAttribute('doh_subdomain');
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

  // ip - computed: true, optional: false, required: false
  public get ip() {
    return this.getStringAttribute('ip');
  }

  // ipv4_destination - computed: true, optional: false, required: false
  public get ipv4Destination() {
    return this.getStringAttribute('ipv4_destination');
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

  // policy_ids - computed: true, optional: false, required: false
  public get policyIds() {
    return this.getListAttribute('policy_ids');
  }

  // networks - computed: false, optional: true, required: false
  private _networks = new TeamsLocationNetworksList(this, "networks", true);
  public get networks() {
    return this._networks;
  }
  public putNetworks(value: TeamsLocationNetworks[] | cdktf.IResolvable) {
    this._networks.internalValue = value;
  }
  public resetNetworks() {
    this._networks.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networksInput() {
    return this._networks.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.stringToTerraform(this._accountId),
      client_default: cdktf.booleanToTerraform(this._clientDefault),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      networks: cdktf.listMapper(teamsLocationNetworksToTerraform)(this._networks.internalValue),
    };
  }
}
