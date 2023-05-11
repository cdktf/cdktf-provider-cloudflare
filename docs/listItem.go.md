# `cloudflare_list_item`

Refer to the Terraform Registory for docs: [`cloudflare_list_item`](https://registry.terraform.io/providers/cloudflare/cloudflare/4.5.0/docs/resources/list_item).

# `listItem` Submodule <a name="`listItem` Submodule" id="@cdktf/provider-cloudflare.listItem"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ListItemA <a name="ListItemA" id="@cdktf/provider-cloudflare.listItem.ListItemA"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.5.0/docs/resources/list_item cloudflare_list_item}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.listItem.ListItemA.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v6/listitem"

listitem.NewListItemA(scope Construct, id *string, config ListItemAConfig) ListItemA
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.listItem.ListItemA.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.listItem.ListItemA.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.listItem.ListItemA.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-cloudflare.listItem.ListItemAConfig">ListItemAConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.listItem.ListItemA.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.listItem.ListItemA.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-cloudflare.listItem.ListItemA.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.listItem.ListItemAConfig">ListItemAConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.listItem.ListItemA.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.listItem.ListItemA.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.listItem.ListItemA.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.listItem.ListItemA.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.listItem.ListItemA.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.listItem.ListItemA.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.listItem.ListItemA.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.listItem.ListItemA.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.listItem.ListItemA.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.listItem.ListItemA.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.listItem.ListItemA.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.listItem.ListItemA.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.listItem.ListItemA.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.listItem.ListItemA.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.listItem.ListItemA.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.listItem.ListItemA.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.listItem.ListItemA.putRedirect">PutRedirect</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.listItem.ListItemA.resetComment">ResetComment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.listItem.ListItemA.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.listItem.ListItemA.resetIp">ResetIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.listItem.ListItemA.resetRedirect">ResetRedirect</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.listItem.ListItemA.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-cloudflare.listItem.ListItemA.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.listItem.ListItemA.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.listItem.ListItemA.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-cloudflare.listItem.ListItemA.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.listItem.ListItemA.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-cloudflare.listItem.ListItemA.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-cloudflare.listItem.ListItemA.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-cloudflare.listItem.ListItemA.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.listItem.ListItemA.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.listItem.ListItemA.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.listItem.ListItemA.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.listItem.ListItemA.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.listItem.ListItemA.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.listItem.ListItemA.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.listItem.ListItemA.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.listItem.ListItemA.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.listItem.ListItemA.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.listItem.ListItemA.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.listItem.ListItemA.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.listItem.ListItemA.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.listItem.ListItemA.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.listItem.ListItemA.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.listItem.ListItemA.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.listItem.ListItemA.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.listItem.ListItemA.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.listItem.ListItemA.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.listItem.ListItemA.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.listItem.ListItemA.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutRedirect` <a name="PutRedirect" id="@cdktf/provider-cloudflare.listItem.ListItemA.putRedirect"></a>

```go
func PutRedirect(value ListItemRedirect)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.listItem.ListItemA.putRedirect.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.listItem.ListItemRedirect">ListItemRedirect</a>

---

##### `ResetComment` <a name="ResetComment" id="@cdktf/provider-cloudflare.listItem.ListItemA.resetComment"></a>

```go
func ResetComment()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-cloudflare.listItem.ListItemA.resetId"></a>

```go
func ResetId()
```

##### `ResetIp` <a name="ResetIp" id="@cdktf/provider-cloudflare.listItem.ListItemA.resetIp"></a>

```go
func ResetIp()
```

##### `ResetRedirect` <a name="ResetRedirect" id="@cdktf/provider-cloudflare.listItem.ListItemA.resetRedirect"></a>

```go
func ResetRedirect()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.listItem.ListItemA.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.listItem.ListItemA.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.listItem.ListItemA.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-cloudflare.listItem.ListItemA.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v6/listitem"

listitem.ListItemA_IsConstruct(x interface{}) *bool
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.listItem.ListItemA.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-cloudflare.listItem.ListItemA.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v6/listitem"

listitem.ListItemA_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.listItem.ListItemA.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-cloudflare.listItem.ListItemA.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v6/listitem"

listitem.ListItemA_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.listItem.ListItemA.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.listItem.ListItemA.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.listItem.ListItemA.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.listItem.ListItemA.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.listItem.ListItemA.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.listItem.ListItemA.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.listItem.ListItemA.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.listItem.ListItemA.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.listItem.ListItemA.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.listItem.ListItemA.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.listItem.ListItemA.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.listItem.ListItemA.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.listItem.ListItemA.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.listItem.ListItemA.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.listItem.ListItemA.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.listItem.ListItemA.property.redirect">Redirect</a></code> | <code><a href="#@cdktf/provider-cloudflare.listItem.ListItemRedirectOutputReference">ListItemRedirectOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.listItem.ListItemA.property.accountIdInput">AccountIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.listItem.ListItemA.property.commentInput">CommentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.listItem.ListItemA.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.listItem.ListItemA.property.ipInput">IpInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.listItem.ListItemA.property.listIdInput">ListIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.listItem.ListItemA.property.redirectInput">RedirectInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.listItem.ListItemRedirect">ListItemRedirect</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.listItem.ListItemA.property.accountId">AccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.listItem.ListItemA.property.comment">Comment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.listItem.ListItemA.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.listItem.ListItemA.property.ip">Ip</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.listItem.ListItemA.property.listId">ListId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-cloudflare.listItem.ListItemA.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-cloudflare.listItem.ListItemA.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.listItem.ListItemA.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-cloudflare.listItem.ListItemA.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-cloudflare.listItem.ListItemA.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-cloudflare.listItem.ListItemA.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-cloudflare.listItem.ListItemA.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.listItem.ListItemA.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.listItem.ListItemA.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.listItem.ListItemA.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.listItem.ListItemA.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.listItem.ListItemA.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.listItem.ListItemA.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.listItem.ListItemA.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Redirect`<sup>Required</sup> <a name="Redirect" id="@cdktf/provider-cloudflare.listItem.ListItemA.property.redirect"></a>

```go
func Redirect() ListItemRedirectOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.listItem.ListItemRedirectOutputReference">ListItemRedirectOutputReference</a>

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktf/provider-cloudflare.listItem.ListItemA.property.accountIdInput"></a>

```go
func AccountIdInput() *string
```

- *Type:* *string

---

##### `CommentInput`<sup>Optional</sup> <a name="CommentInput" id="@cdktf/provider-cloudflare.listItem.ListItemA.property.commentInput"></a>

```go
func CommentInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-cloudflare.listItem.ListItemA.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IpInput`<sup>Optional</sup> <a name="IpInput" id="@cdktf/provider-cloudflare.listItem.ListItemA.property.ipInput"></a>

```go
func IpInput() *string
```

- *Type:* *string

---

##### `ListIdInput`<sup>Optional</sup> <a name="ListIdInput" id="@cdktf/provider-cloudflare.listItem.ListItemA.property.listIdInput"></a>

```go
func ListIdInput() *string
```

- *Type:* *string

---

##### `RedirectInput`<sup>Optional</sup> <a name="RedirectInput" id="@cdktf/provider-cloudflare.listItem.ListItemA.property.redirectInput"></a>

```go
func RedirectInput() ListItemRedirect
```

- *Type:* <a href="#@cdktf/provider-cloudflare.listItem.ListItemRedirect">ListItemRedirect</a>

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.listItem.ListItemA.property.accountId"></a>

```go
func AccountId() *string
```

- *Type:* *string

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktf/provider-cloudflare.listItem.ListItemA.property.comment"></a>

```go
func Comment() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.listItem.ListItemA.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Ip`<sup>Required</sup> <a name="Ip" id="@cdktf/provider-cloudflare.listItem.ListItemA.property.ip"></a>

```go
func Ip() *string
```

- *Type:* *string

---

##### `ListId`<sup>Required</sup> <a name="ListId" id="@cdktf/provider-cloudflare.listItem.ListItemA.property.listId"></a>

```go
func ListId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.listItem.ListItemA.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-cloudflare.listItem.ListItemA.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ListItemAConfig <a name="ListItemAConfig" id="@cdktf/provider-cloudflare.listItem.ListItemAConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.listItem.ListItemAConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v6/listitem"

&listitem.ListItemAConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	AccountId: *string,
	ListId: *string,
	Comment: *string,
	Id: *string,
	Ip: *string,
	Redirect: github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v6.listItem.ListItemRedirect,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.listItem.ListItemAConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.listItem.ListItemAConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.listItem.ListItemAConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.listItem.ListItemAConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.listItem.ListItemAConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.listItem.ListItemAConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.listItem.ListItemAConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.listItem.ListItemAConfig.property.accountId">AccountId</a></code> | <code>*string</code> | The account identifier to target for the resource. |
| <code><a href="#@cdktf/provider-cloudflare.listItem.ListItemAConfig.property.listId">ListId</a></code> | <code>*string</code> | The list identifier to target for the resource. |
| <code><a href="#@cdktf/provider-cloudflare.listItem.ListItemAConfig.property.comment">Comment</a></code> | <code>*string</code> | An optional comment for the item. |
| <code><a href="#@cdktf/provider-cloudflare.listItem.ListItemAConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.5.0/docs/resources/list_item#id ListItemA#id}. |
| <code><a href="#@cdktf/provider-cloudflare.listItem.ListItemAConfig.property.ip">Ip</a></code> | <code>*string</code> | IP address to include in the list. |
| <code><a href="#@cdktf/provider-cloudflare.listItem.ListItemAConfig.property.redirect">Redirect</a></code> | <code><a href="#@cdktf/provider-cloudflare.listItem.ListItemRedirect">ListItemRedirect</a></code> | redirect block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.listItem.ListItemAConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.listItem.ListItemAConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.listItem.ListItemAConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.listItem.ListItemAConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.listItem.ListItemAConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.listItem.ListItemAConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.listItem.ListItemAConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.listItem.ListItemAConfig.property.accountId"></a>

```go
AccountId *string
```

- *Type:* *string

The account identifier to target for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.5.0/docs/resources/list_item#account_id ListItemA#account_id}

---

##### `ListId`<sup>Required</sup> <a name="ListId" id="@cdktf/provider-cloudflare.listItem.ListItemAConfig.property.listId"></a>

```go
ListId *string
```

- *Type:* *string

The list identifier to target for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.5.0/docs/resources/list_item#list_id ListItemA#list_id}

---

##### `Comment`<sup>Optional</sup> <a name="Comment" id="@cdktf/provider-cloudflare.listItem.ListItemAConfig.property.comment"></a>

```go
Comment *string
```

- *Type:* *string

An optional comment for the item.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.5.0/docs/resources/list_item#comment ListItemA#comment}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-cloudflare.listItem.ListItemAConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.5.0/docs/resources/list_item#id ListItemA#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Ip`<sup>Optional</sup> <a name="Ip" id="@cdktf/provider-cloudflare.listItem.ListItemAConfig.property.ip"></a>

```go
Ip *string
```

- *Type:* *string

IP address to include in the list.

Must provide only one of `ip`, `redirect`. **Modifying this attribute will force creation of a new resource.**

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.5.0/docs/resources/list_item#ip ListItemA#ip}

---

##### `Redirect`<sup>Optional</sup> <a name="Redirect" id="@cdktf/provider-cloudflare.listItem.ListItemAConfig.property.redirect"></a>

```go
Redirect ListItemRedirect
```

- *Type:* <a href="#@cdktf/provider-cloudflare.listItem.ListItemRedirect">ListItemRedirect</a>

redirect block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.5.0/docs/resources/list_item#redirect ListItemA#redirect}

---

### ListItemRedirect <a name="ListItemRedirect" id="@cdktf/provider-cloudflare.listItem.ListItemRedirect"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.listItem.ListItemRedirect.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v6/listitem"

&listitem.ListItemRedirect {
	SourceUrl: *string,
	TargetUrl: *string,
	IncludeSubdomains: *string,
	PreservePathSuffix: *string,
	PreserveQueryString: *string,
	StatusCode: *f64,
	SubpathMatching: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.listItem.ListItemRedirect.property.sourceUrl">SourceUrl</a></code> | <code>*string</code> | The source url of the redirect. |
| <code><a href="#@cdktf/provider-cloudflare.listItem.ListItemRedirect.property.targetUrl">TargetUrl</a></code> | <code>*string</code> | The target url of the redirect. |
| <code><a href="#@cdktf/provider-cloudflare.listItem.ListItemRedirect.property.includeSubdomains">IncludeSubdomains</a></code> | <code>*string</code> | Whether the redirect also matches subdomains of the source url. Available values: `disabled`, `enabled`. |
| <code><a href="#@cdktf/provider-cloudflare.listItem.ListItemRedirect.property.preservePathSuffix">PreservePathSuffix</a></code> | <code>*string</code> | Whether to preserve the path suffix when doing subpath matching. Available values: `disabled`, `enabled`. |
| <code><a href="#@cdktf/provider-cloudflare.listItem.ListItemRedirect.property.preserveQueryString">PreserveQueryString</a></code> | <code>*string</code> | Whether the redirect target url should keep the query string of the request's url. Available values: `disabled`, `enabled`. |
| <code><a href="#@cdktf/provider-cloudflare.listItem.ListItemRedirect.property.statusCode">StatusCode</a></code> | <code>*f64</code> | The status code to be used when redirecting a request. |
| <code><a href="#@cdktf/provider-cloudflare.listItem.ListItemRedirect.property.subpathMatching">SubpathMatching</a></code> | <code>*string</code> | Whether the redirect also matches subpaths of the source url. Available values: `disabled`, `enabled`. |

---

##### `SourceUrl`<sup>Required</sup> <a name="SourceUrl" id="@cdktf/provider-cloudflare.listItem.ListItemRedirect.property.sourceUrl"></a>

```go
SourceUrl *string
```

- *Type:* *string

The source url of the redirect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.5.0/docs/resources/list_item#source_url ListItemA#source_url}

---

##### `TargetUrl`<sup>Required</sup> <a name="TargetUrl" id="@cdktf/provider-cloudflare.listItem.ListItemRedirect.property.targetUrl"></a>

```go
TargetUrl *string
```

- *Type:* *string

The target url of the redirect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.5.0/docs/resources/list_item#target_url ListItemA#target_url}

---

##### `IncludeSubdomains`<sup>Optional</sup> <a name="IncludeSubdomains" id="@cdktf/provider-cloudflare.listItem.ListItemRedirect.property.includeSubdomains"></a>

```go
IncludeSubdomains *string
```

- *Type:* *string

Whether the redirect also matches subdomains of the source url. Available values: `disabled`, `enabled`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.5.0/docs/resources/list_item#include_subdomains ListItemA#include_subdomains}

---

##### `PreservePathSuffix`<sup>Optional</sup> <a name="PreservePathSuffix" id="@cdktf/provider-cloudflare.listItem.ListItemRedirect.property.preservePathSuffix"></a>

```go
PreservePathSuffix *string
```

- *Type:* *string

Whether to preserve the path suffix when doing subpath matching. Available values: `disabled`, `enabled`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.5.0/docs/resources/list_item#preserve_path_suffix ListItemA#preserve_path_suffix}

---

##### `PreserveQueryString`<sup>Optional</sup> <a name="PreserveQueryString" id="@cdktf/provider-cloudflare.listItem.ListItemRedirect.property.preserveQueryString"></a>

```go
PreserveQueryString *string
```

- *Type:* *string

Whether the redirect target url should keep the query string of the request's url. Available values: `disabled`, `enabled`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.5.0/docs/resources/list_item#preserve_query_string ListItemA#preserve_query_string}

---

##### `StatusCode`<sup>Optional</sup> <a name="StatusCode" id="@cdktf/provider-cloudflare.listItem.ListItemRedirect.property.statusCode"></a>

```go
StatusCode *f64
```

- *Type:* *f64

The status code to be used when redirecting a request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.5.0/docs/resources/list_item#status_code ListItemA#status_code}

---

##### `SubpathMatching`<sup>Optional</sup> <a name="SubpathMatching" id="@cdktf/provider-cloudflare.listItem.ListItemRedirect.property.subpathMatching"></a>

```go
SubpathMatching *string
```

- *Type:* *string

Whether the redirect also matches subpaths of the source url. Available values: `disabled`, `enabled`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.5.0/docs/resources/list_item#subpath_matching ListItemA#subpath_matching}

---

## Classes <a name="Classes" id="Classes"></a>

### ListItemRedirectOutputReference <a name="ListItemRedirectOutputReference" id="@cdktf/provider-cloudflare.listItem.ListItemRedirectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.listItem.ListItemRedirectOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v6/listitem"

listitem.NewListItemRedirectOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ListItemRedirectOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.listItem.ListItemRedirectOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.listItem.ListItemRedirectOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.listItem.ListItemRedirectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.listItem.ListItemRedirectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.listItem.ListItemRedirectOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.listItem.ListItemRedirectOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.listItem.ListItemRedirectOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.listItem.ListItemRedirectOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.listItem.ListItemRedirectOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.listItem.ListItemRedirectOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.listItem.ListItemRedirectOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.listItem.ListItemRedirectOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.listItem.ListItemRedirectOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.listItem.ListItemRedirectOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.listItem.ListItemRedirectOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.listItem.ListItemRedirectOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.listItem.ListItemRedirectOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.listItem.ListItemRedirectOutputReference.resetIncludeSubdomains">ResetIncludeSubdomains</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.listItem.ListItemRedirectOutputReference.resetPreservePathSuffix">ResetPreservePathSuffix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.listItem.ListItemRedirectOutputReference.resetPreserveQueryString">ResetPreserveQueryString</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.listItem.ListItemRedirectOutputReference.resetStatusCode">ResetStatusCode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.listItem.ListItemRedirectOutputReference.resetSubpathMatching">ResetSubpathMatching</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.listItem.ListItemRedirectOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.listItem.ListItemRedirectOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.listItem.ListItemRedirectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.listItem.ListItemRedirectOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.listItem.ListItemRedirectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.listItem.ListItemRedirectOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.listItem.ListItemRedirectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.listItem.ListItemRedirectOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.listItem.ListItemRedirectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.listItem.ListItemRedirectOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.listItem.ListItemRedirectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.listItem.ListItemRedirectOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.listItem.ListItemRedirectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.listItem.ListItemRedirectOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.listItem.ListItemRedirectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.listItem.ListItemRedirectOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.listItem.ListItemRedirectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.listItem.ListItemRedirectOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.listItem.ListItemRedirectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.listItem.ListItemRedirectOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.listItem.ListItemRedirectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.listItem.ListItemRedirectOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.listItem.ListItemRedirectOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.listItem.ListItemRedirectOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIncludeSubdomains` <a name="ResetIncludeSubdomains" id="@cdktf/provider-cloudflare.listItem.ListItemRedirectOutputReference.resetIncludeSubdomains"></a>

```go
func ResetIncludeSubdomains()
```

##### `ResetPreservePathSuffix` <a name="ResetPreservePathSuffix" id="@cdktf/provider-cloudflare.listItem.ListItemRedirectOutputReference.resetPreservePathSuffix"></a>

```go
func ResetPreservePathSuffix()
```

##### `ResetPreserveQueryString` <a name="ResetPreserveQueryString" id="@cdktf/provider-cloudflare.listItem.ListItemRedirectOutputReference.resetPreserveQueryString"></a>

```go
func ResetPreserveQueryString()
```

##### `ResetStatusCode` <a name="ResetStatusCode" id="@cdktf/provider-cloudflare.listItem.ListItemRedirectOutputReference.resetStatusCode"></a>

```go
func ResetStatusCode()
```

##### `ResetSubpathMatching` <a name="ResetSubpathMatching" id="@cdktf/provider-cloudflare.listItem.ListItemRedirectOutputReference.resetSubpathMatching"></a>

```go
func ResetSubpathMatching()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.listItem.ListItemRedirectOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.listItem.ListItemRedirectOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.listItem.ListItemRedirectOutputReference.property.includeSubdomainsInput">IncludeSubdomainsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.listItem.ListItemRedirectOutputReference.property.preservePathSuffixInput">PreservePathSuffixInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.listItem.ListItemRedirectOutputReference.property.preserveQueryStringInput">PreserveQueryStringInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.listItem.ListItemRedirectOutputReference.property.sourceUrlInput">SourceUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.listItem.ListItemRedirectOutputReference.property.statusCodeInput">StatusCodeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.listItem.ListItemRedirectOutputReference.property.subpathMatchingInput">SubpathMatchingInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.listItem.ListItemRedirectOutputReference.property.targetUrlInput">TargetUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.listItem.ListItemRedirectOutputReference.property.includeSubdomains">IncludeSubdomains</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.listItem.ListItemRedirectOutputReference.property.preservePathSuffix">PreservePathSuffix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.listItem.ListItemRedirectOutputReference.property.preserveQueryString">PreserveQueryString</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.listItem.ListItemRedirectOutputReference.property.sourceUrl">SourceUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.listItem.ListItemRedirectOutputReference.property.statusCode">StatusCode</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.listItem.ListItemRedirectOutputReference.property.subpathMatching">SubpathMatching</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.listItem.ListItemRedirectOutputReference.property.targetUrl">TargetUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.listItem.ListItemRedirectOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.listItem.ListItemRedirect">ListItemRedirect</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.listItem.ListItemRedirectOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.listItem.ListItemRedirectOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IncludeSubdomainsInput`<sup>Optional</sup> <a name="IncludeSubdomainsInput" id="@cdktf/provider-cloudflare.listItem.ListItemRedirectOutputReference.property.includeSubdomainsInput"></a>

```go
func IncludeSubdomainsInput() *string
```

- *Type:* *string

---

##### `PreservePathSuffixInput`<sup>Optional</sup> <a name="PreservePathSuffixInput" id="@cdktf/provider-cloudflare.listItem.ListItemRedirectOutputReference.property.preservePathSuffixInput"></a>

```go
func PreservePathSuffixInput() *string
```

- *Type:* *string

---

##### `PreserveQueryStringInput`<sup>Optional</sup> <a name="PreserveQueryStringInput" id="@cdktf/provider-cloudflare.listItem.ListItemRedirectOutputReference.property.preserveQueryStringInput"></a>

```go
func PreserveQueryStringInput() *string
```

- *Type:* *string

---

##### `SourceUrlInput`<sup>Optional</sup> <a name="SourceUrlInput" id="@cdktf/provider-cloudflare.listItem.ListItemRedirectOutputReference.property.sourceUrlInput"></a>

```go
func SourceUrlInput() *string
```

- *Type:* *string

---

##### `StatusCodeInput`<sup>Optional</sup> <a name="StatusCodeInput" id="@cdktf/provider-cloudflare.listItem.ListItemRedirectOutputReference.property.statusCodeInput"></a>

```go
func StatusCodeInput() *f64
```

- *Type:* *f64

---

##### `SubpathMatchingInput`<sup>Optional</sup> <a name="SubpathMatchingInput" id="@cdktf/provider-cloudflare.listItem.ListItemRedirectOutputReference.property.subpathMatchingInput"></a>

```go
func SubpathMatchingInput() *string
```

- *Type:* *string

---

##### `TargetUrlInput`<sup>Optional</sup> <a name="TargetUrlInput" id="@cdktf/provider-cloudflare.listItem.ListItemRedirectOutputReference.property.targetUrlInput"></a>

```go
func TargetUrlInput() *string
```

- *Type:* *string

---

##### `IncludeSubdomains`<sup>Required</sup> <a name="IncludeSubdomains" id="@cdktf/provider-cloudflare.listItem.ListItemRedirectOutputReference.property.includeSubdomains"></a>

```go
func IncludeSubdomains() *string
```

- *Type:* *string

---

##### `PreservePathSuffix`<sup>Required</sup> <a name="PreservePathSuffix" id="@cdktf/provider-cloudflare.listItem.ListItemRedirectOutputReference.property.preservePathSuffix"></a>

```go
func PreservePathSuffix() *string
```

- *Type:* *string

---

##### `PreserveQueryString`<sup>Required</sup> <a name="PreserveQueryString" id="@cdktf/provider-cloudflare.listItem.ListItemRedirectOutputReference.property.preserveQueryString"></a>

```go
func PreserveQueryString() *string
```

- *Type:* *string

---

##### `SourceUrl`<sup>Required</sup> <a name="SourceUrl" id="@cdktf/provider-cloudflare.listItem.ListItemRedirectOutputReference.property.sourceUrl"></a>

```go
func SourceUrl() *string
```

- *Type:* *string

---

##### `StatusCode`<sup>Required</sup> <a name="StatusCode" id="@cdktf/provider-cloudflare.listItem.ListItemRedirectOutputReference.property.statusCode"></a>

```go
func StatusCode() *f64
```

- *Type:* *f64

---

##### `SubpathMatching`<sup>Required</sup> <a name="SubpathMatching" id="@cdktf/provider-cloudflare.listItem.ListItemRedirectOutputReference.property.subpathMatching"></a>

```go
func SubpathMatching() *string
```

- *Type:* *string

---

##### `TargetUrl`<sup>Required</sup> <a name="TargetUrl" id="@cdktf/provider-cloudflare.listItem.ListItemRedirectOutputReference.property.targetUrl"></a>

```go
func TargetUrl() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.listItem.ListItemRedirectOutputReference.property.internalValue"></a>

```go
func InternalValue() ListItemRedirect
```

- *Type:* <a href="#@cdktf/provider-cloudflare.listItem.ListItemRedirect">ListItemRedirect</a>

---


