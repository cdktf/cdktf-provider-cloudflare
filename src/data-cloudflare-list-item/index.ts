// https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/data-sources/list_item
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataCloudflareListItemConfig extends cdktf.TerraformMetaArguments {
  /**
  * Defines an identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/data-sources/list_item#account_id DataCloudflareListItem#account_id}
  */
  readonly accountId: string;
  /**
  * Defines the unique ID of the item in the List.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/data-sources/list_item#item_id DataCloudflareListItem#item_id}
  */
  readonly itemId: string;
  /**
  * The unique ID of the list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/data-sources/list_item#list_id DataCloudflareListItem#list_id}
  */
  readonly listId: string;
}
export interface DataCloudflareListItemHostname {
}

export function dataCloudflareListItemHostnameToTerraform(struct?: DataCloudflareListItemHostname): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareListItemHostnameToHclTerraform(struct?: DataCloudflareListItemHostname): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareListItemHostnameOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareListItemHostname | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareListItemHostname | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // url_hostname - computed: true, optional: false, required: false
  public get urlHostname() {
    return this.getStringAttribute('url_hostname');
  }
}
export interface DataCloudflareListItemRedirect {
}

export function dataCloudflareListItemRedirectToTerraform(struct?: DataCloudflareListItemRedirect): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareListItemRedirectToHclTerraform(struct?: DataCloudflareListItemRedirect): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareListItemRedirectOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareListItemRedirect | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareListItemRedirect | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // include_subdomains - computed: true, optional: false, required: false
  public get includeSubdomains() {
    return this.getBooleanAttribute('include_subdomains');
  }

  // preserve_path_suffix - computed: true, optional: false, required: false
  public get preservePathSuffix() {
    return this.getBooleanAttribute('preserve_path_suffix');
  }

  // preserve_query_string - computed: true, optional: false, required: false
  public get preserveQueryString() {
    return this.getBooleanAttribute('preserve_query_string');
  }

  // source_url - computed: true, optional: false, required: false
  public get sourceUrl() {
    return this.getStringAttribute('source_url');
  }

  // status_code - computed: true, optional: false, required: false
  public get statusCode() {
    return this.getNumberAttribute('status_code');
  }

  // subpath_matching - computed: true, optional: false, required: false
  public get subpathMatching() {
    return this.getBooleanAttribute('subpath_matching');
  }

  // target_url - computed: true, optional: false, required: false
  public get targetUrl() {
    return this.getStringAttribute('target_url');
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/data-sources/list_item cloudflare_list_item}
*/
export class DataCloudflareListItem extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_list_item";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataCloudflareListItem resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataCloudflareListItem to import
  * @param importFromId The id of the existing DataCloudflareListItem that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/data-sources/list_item#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataCloudflareListItem to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_list_item", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/data-sources/list_item cloudflare_list_item} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataCloudflareListItemConfig
  */
  public constructor(scope: Construct, id: string, config: DataCloudflareListItemConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_list_item',
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
    this._itemId = config.itemId;
    this._listId = config.listId;
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

  // asn - computed: true, optional: false, required: false
  public get asn() {
    return this.getNumberAttribute('asn');
  }

  // comment - computed: true, optional: false, required: false
  public get comment() {
    return this.getStringAttribute('comment');
  }

  // created_on - computed: true, optional: false, required: false
  public get createdOn() {
    return this.getStringAttribute('created_on');
  }

  // hostname - computed: true, optional: false, required: false
  private _hostname = new DataCloudflareListItemHostnameOutputReference(this, "hostname");
  public get hostname() {
    return this._hostname;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ip - computed: true, optional: false, required: false
  public get ip() {
    return this.getStringAttribute('ip');
  }

  // item_id - computed: false, optional: false, required: true
  private _itemId?: string; 
  public get itemId() {
    return this.getStringAttribute('item_id');
  }
  public set itemId(value: string) {
    this._itemId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get itemIdInput() {
    return this._itemId;
  }

  // list_id - computed: false, optional: false, required: true
  private _listId?: string; 
  public get listId() {
    return this.getStringAttribute('list_id');
  }
  public set listId(value: string) {
    this._listId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get listIdInput() {
    return this._listId;
  }

  // modified_on - computed: true, optional: false, required: false
  public get modifiedOn() {
    return this.getStringAttribute('modified_on');
  }

  // redirect - computed: true, optional: false, required: false
  private _redirect = new DataCloudflareListItemRedirectOutputReference(this, "redirect");
  public get redirect() {
    return this._redirect;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.stringToTerraform(this._accountId),
      item_id: cdktf.stringToTerraform(this._itemId),
      list_id: cdktf.stringToTerraform(this._listId),
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
      item_id: {
        value: cdktf.stringToHclTerraform(this._itemId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      list_id: {
        value: cdktf.stringToHclTerraform(this._listId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
