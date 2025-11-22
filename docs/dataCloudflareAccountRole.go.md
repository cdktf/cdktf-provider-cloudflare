# `dataCloudflareAccountRole` Submodule <a name="`dataCloudflareAccountRole` Submodule" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareAccountRole <a name="DataCloudflareAccountRole" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRole"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/account_role cloudflare_account_role}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRole.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflareaccountrole"

datacloudflareaccountrole.NewDataCloudflareAccountRole(scope Construct, id *string, config DataCloudflareAccountRoleConfig) DataCloudflareAccountRole
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRole.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRole.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRole.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRoleConfig">DataCloudflareAccountRoleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRole.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRole.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRole.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRoleConfig">DataCloudflareAccountRoleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRole.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRole.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRole.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRole.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRole.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRole.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRole.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRole.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRole.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRole.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRole.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRole.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRole.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRole.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRole.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRole.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRole.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRole.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRole.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRole.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRole.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRole.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRole.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRole.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRole.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRole.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRole.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRole.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRole.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRole.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRole.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRole.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRole.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRole.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRole.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRole.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRole.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRole.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRole.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRole.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRole.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRole.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRole.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRole.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRole.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRole.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRole.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRole.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRole.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRole.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRole.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataCloudflareAccountRole resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRole.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflareaccountrole"

datacloudflareaccountrole.DataCloudflareAccountRole_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRole.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRole.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflareaccountrole"

datacloudflareaccountrole.DataCloudflareAccountRole_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRole.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRole.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflareaccountrole"

datacloudflareaccountrole.DataCloudflareAccountRole_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRole.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRole.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflareaccountrole"

datacloudflareaccountrole.DataCloudflareAccountRole_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataCloudflareAccountRole resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRole.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRole.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataCloudflareAccountRole to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRole.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataCloudflareAccountRole that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/account_role#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRole.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataCloudflareAccountRole to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRole.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRole.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRole.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRole.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRole.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRole.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRole.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRole.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRole.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRole.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRole.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRole.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRole.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRole.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRole.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRole.property.permissions">Permissions</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsOutputReference">DataCloudflareAccountRolePermissionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRole.property.accountIdInput">AccountIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRole.property.roleIdInput">RoleIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRole.property.accountId">AccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRole.property.roleId">RoleId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRole.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRole.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRole.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRole.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRole.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRole.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRole.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRole.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRole.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRole.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRole.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRole.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRole.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRole.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRole.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Permissions`<sup>Required</sup> <a name="Permissions" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRole.property.permissions"></a>

```go
func Permissions() DataCloudflareAccountRolePermissionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsOutputReference">DataCloudflareAccountRolePermissionsOutputReference</a>

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRole.property.accountIdInput"></a>

```go
func AccountIdInput() *string
```

- *Type:* *string

---

##### `RoleIdInput`<sup>Optional</sup> <a name="RoleIdInput" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRole.property.roleIdInput"></a>

```go
func RoleIdInput() *string
```

- *Type:* *string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRole.property.accountId"></a>

```go
func AccountId() *string
```

- *Type:* *string

---

##### `RoleId`<sup>Required</sup> <a name="RoleId" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRole.property.roleId"></a>

```go
func RoleId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRole.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRole.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareAccountRoleConfig <a name="DataCloudflareAccountRoleConfig" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRoleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRoleConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflareaccountrole"

&datacloudflareaccountrole.DataCloudflareAccountRoleConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	AccountId: *string,
	RoleId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRoleConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRoleConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRoleConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRoleConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRoleConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRoleConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRoleConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRoleConfig.property.accountId">AccountId</a></code> | <code>*string</code> | Account identifier tag. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRoleConfig.property.roleId">RoleId</a></code> | <code>*string</code> | Role identifier tag. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRoleConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRoleConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRoleConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRoleConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRoleConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRoleConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRoleConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRoleConfig.property.accountId"></a>

```go
AccountId *string
```

- *Type:* *string

Account identifier tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/account_role#account_id DataCloudflareAccountRole#account_id}

---

##### `RoleId`<sup>Required</sup> <a name="RoleId" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRoleConfig.property.roleId"></a>

```go
RoleId *string
```

- *Type:* *string

Role identifier tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/account_role#role_id DataCloudflareAccountRole#role_id}

---

### DataCloudflareAccountRolePermissions <a name="DataCloudflareAccountRolePermissions" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflareaccountrole"

&datacloudflareaccountrole.DataCloudflareAccountRolePermissions {

}
```


### DataCloudflareAccountRolePermissionsAnalytics <a name="DataCloudflareAccountRolePermissionsAnalytics" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsAnalytics"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsAnalytics.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflareaccountrole"

&datacloudflareaccountrole.DataCloudflareAccountRolePermissionsAnalytics {

}
```


### DataCloudflareAccountRolePermissionsBilling <a name="DataCloudflareAccountRolePermissionsBilling" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsBilling"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsBilling.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflareaccountrole"

&datacloudflareaccountrole.DataCloudflareAccountRolePermissionsBilling {

}
```


### DataCloudflareAccountRolePermissionsCachePurge <a name="DataCloudflareAccountRolePermissionsCachePurge" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsCachePurge"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsCachePurge.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflareaccountrole"

&datacloudflareaccountrole.DataCloudflareAccountRolePermissionsCachePurge {

}
```


### DataCloudflareAccountRolePermissionsDns <a name="DataCloudflareAccountRolePermissionsDns" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsDns"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsDns.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflareaccountrole"

&datacloudflareaccountrole.DataCloudflareAccountRolePermissionsDns {

}
```


### DataCloudflareAccountRolePermissionsDnsRecords <a name="DataCloudflareAccountRolePermissionsDnsRecords" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsDnsRecords"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsDnsRecords.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflareaccountrole"

&datacloudflareaccountrole.DataCloudflareAccountRolePermissionsDnsRecords {

}
```


### DataCloudflareAccountRolePermissionsLb <a name="DataCloudflareAccountRolePermissionsLb" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsLb"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsLb.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflareaccountrole"

&datacloudflareaccountrole.DataCloudflareAccountRolePermissionsLb {

}
```


### DataCloudflareAccountRolePermissionsLogs <a name="DataCloudflareAccountRolePermissionsLogs" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsLogs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsLogs.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflareaccountrole"

&datacloudflareaccountrole.DataCloudflareAccountRolePermissionsLogs {

}
```


### DataCloudflareAccountRolePermissionsOrganization <a name="DataCloudflareAccountRolePermissionsOrganization" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsOrganization"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsOrganization.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflareaccountrole"

&datacloudflareaccountrole.DataCloudflareAccountRolePermissionsOrganization {

}
```


### DataCloudflareAccountRolePermissionsSsl <a name="DataCloudflareAccountRolePermissionsSsl" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsSsl"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsSsl.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflareaccountrole"

&datacloudflareaccountrole.DataCloudflareAccountRolePermissionsSsl {

}
```


### DataCloudflareAccountRolePermissionsWaf <a name="DataCloudflareAccountRolePermissionsWaf" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsWaf"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsWaf.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflareaccountrole"

&datacloudflareaccountrole.DataCloudflareAccountRolePermissionsWaf {

}
```


### DataCloudflareAccountRolePermissionsZones <a name="DataCloudflareAccountRolePermissionsZones" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsZones"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsZones.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflareaccountrole"

&datacloudflareaccountrole.DataCloudflareAccountRolePermissionsZones {

}
```


### DataCloudflareAccountRolePermissionsZoneSettings <a name="DataCloudflareAccountRolePermissionsZoneSettings" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsZoneSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsZoneSettings.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflareaccountrole"

&datacloudflareaccountrole.DataCloudflareAccountRolePermissionsZoneSettings {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareAccountRolePermissionsAnalyticsOutputReference <a name="DataCloudflareAccountRolePermissionsAnalyticsOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsAnalyticsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsAnalyticsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflareaccountrole"

datacloudflareaccountrole.NewDataCloudflareAccountRolePermissionsAnalyticsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataCloudflareAccountRolePermissionsAnalyticsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsAnalyticsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsAnalyticsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsAnalyticsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsAnalyticsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsAnalyticsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsAnalyticsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsAnalyticsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsAnalyticsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsAnalyticsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsAnalyticsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsAnalyticsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsAnalyticsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsAnalyticsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsAnalyticsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsAnalyticsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsAnalyticsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsAnalyticsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsAnalyticsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsAnalyticsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsAnalyticsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsAnalyticsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsAnalyticsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsAnalyticsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsAnalyticsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsAnalyticsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsAnalyticsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsAnalyticsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsAnalyticsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsAnalyticsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsAnalyticsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsAnalyticsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsAnalyticsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsAnalyticsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsAnalyticsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsAnalyticsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsAnalyticsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsAnalyticsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsAnalyticsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsAnalyticsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsAnalyticsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsAnalyticsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsAnalyticsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsAnalyticsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsAnalyticsOutputReference.property.read">Read</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsAnalyticsOutputReference.property.write">Write</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsAnalyticsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsAnalytics">DataCloudflareAccountRolePermissionsAnalytics</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsAnalyticsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsAnalyticsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsAnalyticsOutputReference.property.read"></a>

```go
func Read() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Write`<sup>Required</sup> <a name="Write" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsAnalyticsOutputReference.property.write"></a>

```go
func Write() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsAnalyticsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataCloudflareAccountRolePermissionsAnalytics
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsAnalytics">DataCloudflareAccountRolePermissionsAnalytics</a>

---


### DataCloudflareAccountRolePermissionsBillingOutputReference <a name="DataCloudflareAccountRolePermissionsBillingOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsBillingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsBillingOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflareaccountrole"

datacloudflareaccountrole.NewDataCloudflareAccountRolePermissionsBillingOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataCloudflareAccountRolePermissionsBillingOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsBillingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsBillingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsBillingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsBillingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsBillingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsBillingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsBillingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsBillingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsBillingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsBillingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsBillingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsBillingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsBillingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsBillingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsBillingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsBillingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsBillingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsBillingOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsBillingOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsBillingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsBillingOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsBillingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsBillingOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsBillingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsBillingOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsBillingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsBillingOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsBillingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsBillingOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsBillingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsBillingOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsBillingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsBillingOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsBillingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsBillingOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsBillingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsBillingOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsBillingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsBillingOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsBillingOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsBillingOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsBillingOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsBillingOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsBillingOutputReference.property.read">Read</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsBillingOutputReference.property.write">Write</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsBillingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsBilling">DataCloudflareAccountRolePermissionsBilling</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsBillingOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsBillingOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsBillingOutputReference.property.read"></a>

```go
func Read() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Write`<sup>Required</sup> <a name="Write" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsBillingOutputReference.property.write"></a>

```go
func Write() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsBillingOutputReference.property.internalValue"></a>

```go
func InternalValue() DataCloudflareAccountRolePermissionsBilling
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsBilling">DataCloudflareAccountRolePermissionsBilling</a>

---


### DataCloudflareAccountRolePermissionsCachePurgeOutputReference <a name="DataCloudflareAccountRolePermissionsCachePurgeOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsCachePurgeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsCachePurgeOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflareaccountrole"

datacloudflareaccountrole.NewDataCloudflareAccountRolePermissionsCachePurgeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataCloudflareAccountRolePermissionsCachePurgeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsCachePurgeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsCachePurgeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsCachePurgeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsCachePurgeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsCachePurgeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsCachePurgeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsCachePurgeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsCachePurgeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsCachePurgeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsCachePurgeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsCachePurgeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsCachePurgeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsCachePurgeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsCachePurgeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsCachePurgeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsCachePurgeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsCachePurgeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsCachePurgeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsCachePurgeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsCachePurgeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsCachePurgeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsCachePurgeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsCachePurgeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsCachePurgeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsCachePurgeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsCachePurgeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsCachePurgeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsCachePurgeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsCachePurgeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsCachePurgeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsCachePurgeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsCachePurgeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsCachePurgeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsCachePurgeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsCachePurgeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsCachePurgeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsCachePurgeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsCachePurgeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsCachePurgeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsCachePurgeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsCachePurgeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsCachePurgeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsCachePurgeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsCachePurgeOutputReference.property.read">Read</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsCachePurgeOutputReference.property.write">Write</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsCachePurgeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsCachePurge">DataCloudflareAccountRolePermissionsCachePurge</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsCachePurgeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsCachePurgeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsCachePurgeOutputReference.property.read"></a>

```go
func Read() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Write`<sup>Required</sup> <a name="Write" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsCachePurgeOutputReference.property.write"></a>

```go
func Write() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsCachePurgeOutputReference.property.internalValue"></a>

```go
func InternalValue() DataCloudflareAccountRolePermissionsCachePurge
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsCachePurge">DataCloudflareAccountRolePermissionsCachePurge</a>

---


### DataCloudflareAccountRolePermissionsDnsOutputReference <a name="DataCloudflareAccountRolePermissionsDnsOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsDnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsDnsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflareaccountrole"

datacloudflareaccountrole.NewDataCloudflareAccountRolePermissionsDnsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataCloudflareAccountRolePermissionsDnsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsDnsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsDnsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsDnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsDnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsDnsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsDnsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsDnsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsDnsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsDnsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsDnsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsDnsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsDnsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsDnsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsDnsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsDnsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsDnsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsDnsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsDnsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsDnsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsDnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsDnsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsDnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsDnsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsDnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsDnsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsDnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsDnsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsDnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsDnsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsDnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsDnsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsDnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsDnsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsDnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsDnsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsDnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsDnsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsDnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsDnsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsDnsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsDnsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsDnsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsDnsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsDnsOutputReference.property.read">Read</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsDnsOutputReference.property.write">Write</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsDnsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsDns">DataCloudflareAccountRolePermissionsDns</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsDnsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsDnsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsDnsOutputReference.property.read"></a>

```go
func Read() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Write`<sup>Required</sup> <a name="Write" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsDnsOutputReference.property.write"></a>

```go
func Write() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsDnsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataCloudflareAccountRolePermissionsDns
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsDns">DataCloudflareAccountRolePermissionsDns</a>

---


### DataCloudflareAccountRolePermissionsDnsRecordsOutputReference <a name="DataCloudflareAccountRolePermissionsDnsRecordsOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsDnsRecordsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsDnsRecordsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflareaccountrole"

datacloudflareaccountrole.NewDataCloudflareAccountRolePermissionsDnsRecordsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataCloudflareAccountRolePermissionsDnsRecordsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsDnsRecordsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsDnsRecordsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsDnsRecordsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsDnsRecordsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsDnsRecordsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsDnsRecordsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsDnsRecordsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsDnsRecordsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsDnsRecordsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsDnsRecordsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsDnsRecordsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsDnsRecordsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsDnsRecordsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsDnsRecordsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsDnsRecordsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsDnsRecordsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsDnsRecordsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsDnsRecordsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsDnsRecordsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsDnsRecordsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsDnsRecordsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsDnsRecordsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsDnsRecordsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsDnsRecordsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsDnsRecordsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsDnsRecordsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsDnsRecordsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsDnsRecordsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsDnsRecordsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsDnsRecordsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsDnsRecordsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsDnsRecordsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsDnsRecordsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsDnsRecordsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsDnsRecordsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsDnsRecordsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsDnsRecordsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsDnsRecordsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsDnsRecordsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsDnsRecordsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsDnsRecordsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsDnsRecordsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsDnsRecordsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsDnsRecordsOutputReference.property.read">Read</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsDnsRecordsOutputReference.property.write">Write</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsDnsRecordsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsDnsRecords">DataCloudflareAccountRolePermissionsDnsRecords</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsDnsRecordsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsDnsRecordsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsDnsRecordsOutputReference.property.read"></a>

```go
func Read() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Write`<sup>Required</sup> <a name="Write" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsDnsRecordsOutputReference.property.write"></a>

```go
func Write() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsDnsRecordsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataCloudflareAccountRolePermissionsDnsRecords
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsDnsRecords">DataCloudflareAccountRolePermissionsDnsRecords</a>

---


### DataCloudflareAccountRolePermissionsLbOutputReference <a name="DataCloudflareAccountRolePermissionsLbOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsLbOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsLbOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflareaccountrole"

datacloudflareaccountrole.NewDataCloudflareAccountRolePermissionsLbOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataCloudflareAccountRolePermissionsLbOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsLbOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsLbOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsLbOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsLbOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsLbOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsLbOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsLbOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsLbOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsLbOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsLbOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsLbOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsLbOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsLbOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsLbOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsLbOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsLbOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsLbOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsLbOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsLbOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsLbOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsLbOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsLbOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsLbOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsLbOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsLbOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsLbOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsLbOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsLbOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsLbOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsLbOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsLbOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsLbOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsLbOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsLbOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsLbOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsLbOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsLbOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsLbOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsLbOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsLbOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsLbOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsLbOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsLbOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsLbOutputReference.property.read">Read</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsLbOutputReference.property.write">Write</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsLbOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsLb">DataCloudflareAccountRolePermissionsLb</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsLbOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsLbOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsLbOutputReference.property.read"></a>

```go
func Read() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Write`<sup>Required</sup> <a name="Write" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsLbOutputReference.property.write"></a>

```go
func Write() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsLbOutputReference.property.internalValue"></a>

```go
func InternalValue() DataCloudflareAccountRolePermissionsLb
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsLb">DataCloudflareAccountRolePermissionsLb</a>

---


### DataCloudflareAccountRolePermissionsLogsOutputReference <a name="DataCloudflareAccountRolePermissionsLogsOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsLogsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsLogsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflareaccountrole"

datacloudflareaccountrole.NewDataCloudflareAccountRolePermissionsLogsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataCloudflareAccountRolePermissionsLogsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsLogsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsLogsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsLogsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsLogsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsLogsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsLogsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsLogsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsLogsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsLogsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsLogsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsLogsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsLogsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsLogsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsLogsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsLogsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsLogsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsLogsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsLogsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsLogsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsLogsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsLogsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsLogsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsLogsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsLogsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsLogsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsLogsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsLogsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsLogsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsLogsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsLogsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsLogsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsLogsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsLogsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsLogsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsLogsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsLogsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsLogsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsLogsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsLogsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsLogsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsLogsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsLogsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsLogsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsLogsOutputReference.property.read">Read</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsLogsOutputReference.property.write">Write</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsLogsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsLogs">DataCloudflareAccountRolePermissionsLogs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsLogsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsLogsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsLogsOutputReference.property.read"></a>

```go
func Read() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Write`<sup>Required</sup> <a name="Write" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsLogsOutputReference.property.write"></a>

```go
func Write() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsLogsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataCloudflareAccountRolePermissionsLogs
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsLogs">DataCloudflareAccountRolePermissionsLogs</a>

---


### DataCloudflareAccountRolePermissionsOrganizationOutputReference <a name="DataCloudflareAccountRolePermissionsOrganizationOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsOrganizationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsOrganizationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflareaccountrole"

datacloudflareaccountrole.NewDataCloudflareAccountRolePermissionsOrganizationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataCloudflareAccountRolePermissionsOrganizationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsOrganizationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsOrganizationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsOrganizationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsOrganizationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsOrganizationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsOrganizationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsOrganizationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsOrganizationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsOrganizationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsOrganizationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsOrganizationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsOrganizationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsOrganizationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsOrganizationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsOrganizationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsOrganizationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsOrganizationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsOrganizationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsOrganizationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsOrganizationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsOrganizationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsOrganizationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsOrganizationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsOrganizationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsOrganizationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsOrganizationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsOrganizationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsOrganizationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsOrganizationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsOrganizationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsOrganizationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsOrganizationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsOrganizationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsOrganizationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsOrganizationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsOrganizationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsOrganizationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsOrganizationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsOrganizationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsOrganizationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsOrganizationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsOrganizationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsOrganizationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsOrganizationOutputReference.property.read">Read</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsOrganizationOutputReference.property.write">Write</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsOrganizationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsOrganization">DataCloudflareAccountRolePermissionsOrganization</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsOrganizationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsOrganizationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsOrganizationOutputReference.property.read"></a>

```go
func Read() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Write`<sup>Required</sup> <a name="Write" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsOrganizationOutputReference.property.write"></a>

```go
func Write() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsOrganizationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataCloudflareAccountRolePermissionsOrganization
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsOrganization">DataCloudflareAccountRolePermissionsOrganization</a>

---


### DataCloudflareAccountRolePermissionsOutputReference <a name="DataCloudflareAccountRolePermissionsOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflareaccountrole"

datacloudflareaccountrole.NewDataCloudflareAccountRolePermissionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataCloudflareAccountRolePermissionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsOutputReference.property.analytics">Analytics</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsAnalyticsOutputReference">DataCloudflareAccountRolePermissionsAnalyticsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsOutputReference.property.billing">Billing</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsBillingOutputReference">DataCloudflareAccountRolePermissionsBillingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsOutputReference.property.cachePurge">CachePurge</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsCachePurgeOutputReference">DataCloudflareAccountRolePermissionsCachePurgeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsOutputReference.property.dns">Dns</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsDnsOutputReference">DataCloudflareAccountRolePermissionsDnsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsOutputReference.property.dnsRecords">DnsRecords</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsDnsRecordsOutputReference">DataCloudflareAccountRolePermissionsDnsRecordsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsOutputReference.property.lb">Lb</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsLbOutputReference">DataCloudflareAccountRolePermissionsLbOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsOutputReference.property.logs">Logs</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsLogsOutputReference">DataCloudflareAccountRolePermissionsLogsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsOutputReference.property.organization">Organization</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsOrganizationOutputReference">DataCloudflareAccountRolePermissionsOrganizationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsOutputReference.property.ssl">Ssl</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsSslOutputReference">DataCloudflareAccountRolePermissionsSslOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsOutputReference.property.waf">Waf</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsWafOutputReference">DataCloudflareAccountRolePermissionsWafOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsOutputReference.property.zones">Zones</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsZonesOutputReference">DataCloudflareAccountRolePermissionsZonesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsOutputReference.property.zoneSettings">ZoneSettings</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsZoneSettingsOutputReference">DataCloudflareAccountRolePermissionsZoneSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissions">DataCloudflareAccountRolePermissions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Analytics`<sup>Required</sup> <a name="Analytics" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsOutputReference.property.analytics"></a>

```go
func Analytics() DataCloudflareAccountRolePermissionsAnalyticsOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsAnalyticsOutputReference">DataCloudflareAccountRolePermissionsAnalyticsOutputReference</a>

---

##### `Billing`<sup>Required</sup> <a name="Billing" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsOutputReference.property.billing"></a>

```go
func Billing() DataCloudflareAccountRolePermissionsBillingOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsBillingOutputReference">DataCloudflareAccountRolePermissionsBillingOutputReference</a>

---

##### `CachePurge`<sup>Required</sup> <a name="CachePurge" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsOutputReference.property.cachePurge"></a>

```go
func CachePurge() DataCloudflareAccountRolePermissionsCachePurgeOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsCachePurgeOutputReference">DataCloudflareAccountRolePermissionsCachePurgeOutputReference</a>

---

##### `Dns`<sup>Required</sup> <a name="Dns" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsOutputReference.property.dns"></a>

```go
func Dns() DataCloudflareAccountRolePermissionsDnsOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsDnsOutputReference">DataCloudflareAccountRolePermissionsDnsOutputReference</a>

---

##### `DnsRecords`<sup>Required</sup> <a name="DnsRecords" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsOutputReference.property.dnsRecords"></a>

```go
func DnsRecords() DataCloudflareAccountRolePermissionsDnsRecordsOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsDnsRecordsOutputReference">DataCloudflareAccountRolePermissionsDnsRecordsOutputReference</a>

---

##### `Lb`<sup>Required</sup> <a name="Lb" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsOutputReference.property.lb"></a>

```go
func Lb() DataCloudflareAccountRolePermissionsLbOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsLbOutputReference">DataCloudflareAccountRolePermissionsLbOutputReference</a>

---

##### `Logs`<sup>Required</sup> <a name="Logs" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsOutputReference.property.logs"></a>

```go
func Logs() DataCloudflareAccountRolePermissionsLogsOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsLogsOutputReference">DataCloudflareAccountRolePermissionsLogsOutputReference</a>

---

##### `Organization`<sup>Required</sup> <a name="Organization" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsOutputReference.property.organization"></a>

```go
func Organization() DataCloudflareAccountRolePermissionsOrganizationOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsOrganizationOutputReference">DataCloudflareAccountRolePermissionsOrganizationOutputReference</a>

---

##### `Ssl`<sup>Required</sup> <a name="Ssl" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsOutputReference.property.ssl"></a>

```go
func Ssl() DataCloudflareAccountRolePermissionsSslOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsSslOutputReference">DataCloudflareAccountRolePermissionsSslOutputReference</a>

---

##### `Waf`<sup>Required</sup> <a name="Waf" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsOutputReference.property.waf"></a>

```go
func Waf() DataCloudflareAccountRolePermissionsWafOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsWafOutputReference">DataCloudflareAccountRolePermissionsWafOutputReference</a>

---

##### `Zones`<sup>Required</sup> <a name="Zones" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsOutputReference.property.zones"></a>

```go
func Zones() DataCloudflareAccountRolePermissionsZonesOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsZonesOutputReference">DataCloudflareAccountRolePermissionsZonesOutputReference</a>

---

##### `ZoneSettings`<sup>Required</sup> <a name="ZoneSettings" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsOutputReference.property.zoneSettings"></a>

```go
func ZoneSettings() DataCloudflareAccountRolePermissionsZoneSettingsOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsZoneSettingsOutputReference">DataCloudflareAccountRolePermissionsZoneSettingsOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataCloudflareAccountRolePermissions
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissions">DataCloudflareAccountRolePermissions</a>

---


### DataCloudflareAccountRolePermissionsSslOutputReference <a name="DataCloudflareAccountRolePermissionsSslOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsSslOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsSslOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflareaccountrole"

datacloudflareaccountrole.NewDataCloudflareAccountRolePermissionsSslOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataCloudflareAccountRolePermissionsSslOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsSslOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsSslOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsSslOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsSslOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsSslOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsSslOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsSslOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsSslOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsSslOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsSslOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsSslOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsSslOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsSslOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsSslOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsSslOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsSslOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsSslOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsSslOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsSslOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsSslOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsSslOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsSslOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsSslOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsSslOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsSslOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsSslOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsSslOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsSslOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsSslOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsSslOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsSslOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsSslOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsSslOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsSslOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsSslOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsSslOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsSslOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsSslOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsSslOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsSslOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsSslOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsSslOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsSslOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsSslOutputReference.property.read">Read</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsSslOutputReference.property.write">Write</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsSslOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsSsl">DataCloudflareAccountRolePermissionsSsl</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsSslOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsSslOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsSslOutputReference.property.read"></a>

```go
func Read() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Write`<sup>Required</sup> <a name="Write" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsSslOutputReference.property.write"></a>

```go
func Write() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsSslOutputReference.property.internalValue"></a>

```go
func InternalValue() DataCloudflareAccountRolePermissionsSsl
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsSsl">DataCloudflareAccountRolePermissionsSsl</a>

---


### DataCloudflareAccountRolePermissionsWafOutputReference <a name="DataCloudflareAccountRolePermissionsWafOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsWafOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsWafOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflareaccountrole"

datacloudflareaccountrole.NewDataCloudflareAccountRolePermissionsWafOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataCloudflareAccountRolePermissionsWafOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsWafOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsWafOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsWafOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsWafOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsWafOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsWafOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsWafOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsWafOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsWafOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsWafOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsWafOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsWafOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsWafOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsWafOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsWafOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsWafOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsWafOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsWafOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsWafOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsWafOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsWafOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsWafOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsWafOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsWafOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsWafOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsWafOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsWafOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsWafOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsWafOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsWafOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsWafOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsWafOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsWafOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsWafOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsWafOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsWafOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsWafOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsWafOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsWafOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsWafOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsWafOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsWafOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsWafOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsWafOutputReference.property.read">Read</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsWafOutputReference.property.write">Write</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsWafOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsWaf">DataCloudflareAccountRolePermissionsWaf</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsWafOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsWafOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsWafOutputReference.property.read"></a>

```go
func Read() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Write`<sup>Required</sup> <a name="Write" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsWafOutputReference.property.write"></a>

```go
func Write() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsWafOutputReference.property.internalValue"></a>

```go
func InternalValue() DataCloudflareAccountRolePermissionsWaf
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsWaf">DataCloudflareAccountRolePermissionsWaf</a>

---


### DataCloudflareAccountRolePermissionsZoneSettingsOutputReference <a name="DataCloudflareAccountRolePermissionsZoneSettingsOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsZoneSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsZoneSettingsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflareaccountrole"

datacloudflareaccountrole.NewDataCloudflareAccountRolePermissionsZoneSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataCloudflareAccountRolePermissionsZoneSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsZoneSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsZoneSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsZoneSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsZoneSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsZoneSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsZoneSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsZoneSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsZoneSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsZoneSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsZoneSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsZoneSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsZoneSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsZoneSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsZoneSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsZoneSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsZoneSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsZoneSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsZoneSettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsZoneSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsZoneSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsZoneSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsZoneSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsZoneSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsZoneSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsZoneSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsZoneSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsZoneSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsZoneSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsZoneSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsZoneSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsZoneSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsZoneSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsZoneSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsZoneSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsZoneSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsZoneSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsZoneSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsZoneSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsZoneSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsZoneSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsZoneSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsZoneSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsZoneSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsZoneSettingsOutputReference.property.read">Read</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsZoneSettingsOutputReference.property.write">Write</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsZoneSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsZoneSettings">DataCloudflareAccountRolePermissionsZoneSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsZoneSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsZoneSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsZoneSettingsOutputReference.property.read"></a>

```go
func Read() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Write`<sup>Required</sup> <a name="Write" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsZoneSettingsOutputReference.property.write"></a>

```go
func Write() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsZoneSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataCloudflareAccountRolePermissionsZoneSettings
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsZoneSettings">DataCloudflareAccountRolePermissionsZoneSettings</a>

---


### DataCloudflareAccountRolePermissionsZonesOutputReference <a name="DataCloudflareAccountRolePermissionsZonesOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsZonesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsZonesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflareaccountrole"

datacloudflareaccountrole.NewDataCloudflareAccountRolePermissionsZonesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataCloudflareAccountRolePermissionsZonesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsZonesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsZonesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsZonesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsZonesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsZonesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsZonesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsZonesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsZonesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsZonesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsZonesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsZonesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsZonesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsZonesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsZonesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsZonesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsZonesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsZonesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsZonesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsZonesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsZonesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsZonesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsZonesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsZonesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsZonesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsZonesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsZonesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsZonesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsZonesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsZonesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsZonesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsZonesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsZonesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsZonesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsZonesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsZonesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsZonesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsZonesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsZonesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsZonesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsZonesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsZonesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsZonesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsZonesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsZonesOutputReference.property.read">Read</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsZonesOutputReference.property.write">Write</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsZonesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsZones">DataCloudflareAccountRolePermissionsZones</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsZonesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsZonesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsZonesOutputReference.property.read"></a>

```go
func Read() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Write`<sup>Required</sup> <a name="Write" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsZonesOutputReference.property.write"></a>

```go
func Write() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsZonesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataCloudflareAccountRolePermissionsZones
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareAccountRole.DataCloudflareAccountRolePermissionsZones">DataCloudflareAccountRolePermissionsZones</a>

---



