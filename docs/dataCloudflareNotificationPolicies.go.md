# `dataCloudflareNotificationPolicies` Submodule <a name="`dataCloudflareNotificationPolicies` Submodule" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareNotificationPolicies <a name="DataCloudflareNotificationPolicies" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/notification_policies cloudflare_notification_policies}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/datacloudflarenotificationpolicies"

datacloudflarenotificationpolicies.NewDataCloudflareNotificationPolicies(scope Construct, id *string, config DataCloudflareNotificationPoliciesConfig) DataCloudflareNotificationPolicies
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesConfig">DataCloudflareNotificationPoliciesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesConfig">DataCloudflareNotificationPoliciesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.resetMaxItems">ResetMaxItems</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetMaxItems` <a name="ResetMaxItems" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.resetMaxItems"></a>

```go
func ResetMaxItems()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataCloudflareNotificationPolicies resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/datacloudflarenotificationpolicies"

datacloudflarenotificationpolicies.DataCloudflareNotificationPolicies_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/datacloudflarenotificationpolicies"

datacloudflarenotificationpolicies.DataCloudflareNotificationPolicies_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/datacloudflarenotificationpolicies"

datacloudflarenotificationpolicies.DataCloudflareNotificationPolicies_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/datacloudflarenotificationpolicies"

datacloudflarenotificationpolicies.DataCloudflareNotificationPolicies_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataCloudflareNotificationPolicies resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataCloudflareNotificationPolicies to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataCloudflareNotificationPolicies that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/notification_policies#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataCloudflareNotificationPolicies to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.property.result">Result</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultList">DataCloudflareNotificationPoliciesResultList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.property.accountIdInput">AccountIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.property.maxItemsInput">MaxItemsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.property.accountId">AccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.property.maxItems">MaxItems</a></code> | <code>*f64</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Result`<sup>Required</sup> <a name="Result" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.property.result"></a>

```go
func Result() DataCloudflareNotificationPoliciesResultList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultList">DataCloudflareNotificationPoliciesResultList</a>

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.property.accountIdInput"></a>

```go
func AccountIdInput() *string
```

- *Type:* *string

---

##### `MaxItemsInput`<sup>Optional</sup> <a name="MaxItemsInput" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.property.maxItemsInput"></a>

```go
func MaxItemsInput() *f64
```

- *Type:* *f64

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.property.accountId"></a>

```go
func AccountId() *string
```

- *Type:* *string

---

##### `MaxItems`<sup>Required</sup> <a name="MaxItems" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.property.maxItems"></a>

```go
func MaxItems() *f64
```

- *Type:* *f64

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPolicies.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareNotificationPoliciesConfig <a name="DataCloudflareNotificationPoliciesConfig" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/datacloudflarenotificationpolicies"

&datacloudflarenotificationpolicies.DataCloudflareNotificationPoliciesConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	AccountId: *string,
	MaxItems: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesConfig.property.accountId">AccountId</a></code> | <code>*string</code> | The account id. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesConfig.property.maxItems">MaxItems</a></code> | <code>*f64</code> | Max items to fetch, default: 1000. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesConfig.property.accountId"></a>

```go
AccountId *string
```

- *Type:* *string

The account id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/notification_policies#account_id DataCloudflareNotificationPolicies#account_id}

---

##### `MaxItems`<sup>Optional</sup> <a name="MaxItems" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesConfig.property.maxItems"></a>

```go
MaxItems *f64
```

- *Type:* *f64

Max items to fetch, default: 1000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/notification_policies#max_items DataCloudflareNotificationPolicies#max_items}

---

### DataCloudflareNotificationPoliciesResult <a name="DataCloudflareNotificationPoliciesResult" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResult"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResult.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/datacloudflarenotificationpolicies"

&datacloudflarenotificationpolicies.DataCloudflareNotificationPoliciesResult {

}
```


### DataCloudflareNotificationPoliciesResultFilters <a name="DataCloudflareNotificationPoliciesResultFilters" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFilters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFilters.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/datacloudflarenotificationpolicies"

&datacloudflarenotificationpolicies.DataCloudflareNotificationPoliciesResultFilters {

}
```


### DataCloudflareNotificationPoliciesResultMechanisms <a name="DataCloudflareNotificationPoliciesResultMechanisms" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanisms"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanisms.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/datacloudflarenotificationpolicies"

&datacloudflarenotificationpolicies.DataCloudflareNotificationPoliciesResultMechanisms {

}
```


### DataCloudflareNotificationPoliciesResultMechanismsEmail <a name="DataCloudflareNotificationPoliciesResultMechanismsEmail" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsEmail"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsEmail.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/datacloudflarenotificationpolicies"

&datacloudflarenotificationpolicies.DataCloudflareNotificationPoliciesResultMechanismsEmail {

}
```


### DataCloudflareNotificationPoliciesResultMechanismsPagerduty <a name="DataCloudflareNotificationPoliciesResultMechanismsPagerduty" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsPagerduty"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsPagerduty.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/datacloudflarenotificationpolicies"

&datacloudflarenotificationpolicies.DataCloudflareNotificationPoliciesResultMechanismsPagerduty {

}
```


### DataCloudflareNotificationPoliciesResultMechanismsWebhooks <a name="DataCloudflareNotificationPoliciesResultMechanismsWebhooks" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsWebhooks"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsWebhooks.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/datacloudflarenotificationpolicies"

&datacloudflarenotificationpolicies.DataCloudflareNotificationPoliciesResultMechanismsWebhooks {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareNotificationPoliciesResultFiltersOutputReference <a name="DataCloudflareNotificationPoliciesResultFiltersOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/datacloudflarenotificationpolicies"

datacloudflarenotificationpolicies.NewDataCloudflareNotificationPoliciesResultFiltersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataCloudflareNotificationPoliciesResultFiltersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.property.actions">Actions</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.property.affectedAsns">AffectedAsns</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.property.affectedComponents">AffectedComponents</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.property.affectedLocations">AffectedLocations</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.property.airportCode">AirportCode</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.property.alertTriggerPreferences">AlertTriggerPreferences</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.property.alertTriggerPreferencesValue">AlertTriggerPreferencesValue</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.property.enabled">Enabled</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.property.environment">Environment</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.property.event">Event</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.property.eventSource">EventSource</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.property.eventType">EventType</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.property.groupBy">GroupBy</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.property.healthCheckId">HealthCheckId</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.property.incidentImpact">IncidentImpact</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.property.inputId">InputId</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.property.insightClass">InsightClass</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.property.limit">Limit</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.property.logoTag">LogoTag</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.property.megabitsPerSecond">MegabitsPerSecond</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.property.newHealth">NewHealth</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.property.newStatus">NewStatus</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.property.packetsPerSecond">PacketsPerSecond</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.property.poolId">PoolId</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.property.popNames">PopNames</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.property.product">Product</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.property.projectId">ProjectId</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.property.protocol">Protocol</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.property.queryTag">QueryTag</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.property.requestsPerSecond">RequestsPerSecond</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.property.selectors">Selectors</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.property.services">Services</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.property.slo">Slo</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.property.status">Status</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.property.targetHostname">TargetHostname</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.property.targetIp">TargetIp</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.property.targetZoneName">TargetZoneName</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.property.trafficExclusions">TrafficExclusions</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.property.tunnelId">TunnelId</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.property.tunnelName">TunnelName</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.property.where">Where</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.property.zones">Zones</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFilters">DataCloudflareNotificationPoliciesResultFilters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Actions`<sup>Required</sup> <a name="Actions" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.property.actions"></a>

```go
func Actions() *[]*string
```

- *Type:* *[]*string

---

##### `AffectedAsns`<sup>Required</sup> <a name="AffectedAsns" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.property.affectedAsns"></a>

```go
func AffectedAsns() *[]*string
```

- *Type:* *[]*string

---

##### `AffectedComponents`<sup>Required</sup> <a name="AffectedComponents" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.property.affectedComponents"></a>

```go
func AffectedComponents() *[]*string
```

- *Type:* *[]*string

---

##### `AffectedLocations`<sup>Required</sup> <a name="AffectedLocations" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.property.affectedLocations"></a>

```go
func AffectedLocations() *[]*string
```

- *Type:* *[]*string

---

##### `AirportCode`<sup>Required</sup> <a name="AirportCode" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.property.airportCode"></a>

```go
func AirportCode() *[]*string
```

- *Type:* *[]*string

---

##### `AlertTriggerPreferences`<sup>Required</sup> <a name="AlertTriggerPreferences" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.property.alertTriggerPreferences"></a>

```go
func AlertTriggerPreferences() *[]*string
```

- *Type:* *[]*string

---

##### `AlertTriggerPreferencesValue`<sup>Required</sup> <a name="AlertTriggerPreferencesValue" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.property.alertTriggerPreferencesValue"></a>

```go
func AlertTriggerPreferencesValue() *[]*string
```

- *Type:* *[]*string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.property.enabled"></a>

```go
func Enabled() *[]*string
```

- *Type:* *[]*string

---

##### `Environment`<sup>Required</sup> <a name="Environment" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.property.environment"></a>

```go
func Environment() *[]*string
```

- *Type:* *[]*string

---

##### `Event`<sup>Required</sup> <a name="Event" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.property.event"></a>

```go
func Event() *[]*string
```

- *Type:* *[]*string

---

##### `EventSource`<sup>Required</sup> <a name="EventSource" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.property.eventSource"></a>

```go
func EventSource() *[]*string
```

- *Type:* *[]*string

---

##### `EventType`<sup>Required</sup> <a name="EventType" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.property.eventType"></a>

```go
func EventType() *[]*string
```

- *Type:* *[]*string

---

##### `GroupBy`<sup>Required</sup> <a name="GroupBy" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.property.groupBy"></a>

```go
func GroupBy() *[]*string
```

- *Type:* *[]*string

---

##### `HealthCheckId`<sup>Required</sup> <a name="HealthCheckId" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.property.healthCheckId"></a>

```go
func HealthCheckId() *[]*string
```

- *Type:* *[]*string

---

##### `IncidentImpact`<sup>Required</sup> <a name="IncidentImpact" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.property.incidentImpact"></a>

```go
func IncidentImpact() *[]*string
```

- *Type:* *[]*string

---

##### `InputId`<sup>Required</sup> <a name="InputId" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.property.inputId"></a>

```go
func InputId() *[]*string
```

- *Type:* *[]*string

---

##### `InsightClass`<sup>Required</sup> <a name="InsightClass" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.property.insightClass"></a>

```go
func InsightClass() *[]*string
```

- *Type:* *[]*string

---

##### `Limit`<sup>Required</sup> <a name="Limit" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.property.limit"></a>

```go
func Limit() *[]*string
```

- *Type:* *[]*string

---

##### `LogoTag`<sup>Required</sup> <a name="LogoTag" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.property.logoTag"></a>

```go
func LogoTag() *[]*string
```

- *Type:* *[]*string

---

##### `MegabitsPerSecond`<sup>Required</sup> <a name="MegabitsPerSecond" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.property.megabitsPerSecond"></a>

```go
func MegabitsPerSecond() *[]*string
```

- *Type:* *[]*string

---

##### `NewHealth`<sup>Required</sup> <a name="NewHealth" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.property.newHealth"></a>

```go
func NewHealth() *[]*string
```

- *Type:* *[]*string

---

##### `NewStatus`<sup>Required</sup> <a name="NewStatus" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.property.newStatus"></a>

```go
func NewStatus() *[]*string
```

- *Type:* *[]*string

---

##### `PacketsPerSecond`<sup>Required</sup> <a name="PacketsPerSecond" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.property.packetsPerSecond"></a>

```go
func PacketsPerSecond() *[]*string
```

- *Type:* *[]*string

---

##### `PoolId`<sup>Required</sup> <a name="PoolId" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.property.poolId"></a>

```go
func PoolId() *[]*string
```

- *Type:* *[]*string

---

##### `PopNames`<sup>Required</sup> <a name="PopNames" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.property.popNames"></a>

```go
func PopNames() *[]*string
```

- *Type:* *[]*string

---

##### `Product`<sup>Required</sup> <a name="Product" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.property.product"></a>

```go
func Product() *[]*string
```

- *Type:* *[]*string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.property.projectId"></a>

```go
func ProjectId() *[]*string
```

- *Type:* *[]*string

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.property.protocol"></a>

```go
func Protocol() *[]*string
```

- *Type:* *[]*string

---

##### `QueryTag`<sup>Required</sup> <a name="QueryTag" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.property.queryTag"></a>

```go
func QueryTag() *[]*string
```

- *Type:* *[]*string

---

##### `RequestsPerSecond`<sup>Required</sup> <a name="RequestsPerSecond" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.property.requestsPerSecond"></a>

```go
func RequestsPerSecond() *[]*string
```

- *Type:* *[]*string

---

##### `Selectors`<sup>Required</sup> <a name="Selectors" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.property.selectors"></a>

```go
func Selectors() *[]*string
```

- *Type:* *[]*string

---

##### `Services`<sup>Required</sup> <a name="Services" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.property.services"></a>

```go
func Services() *[]*string
```

- *Type:* *[]*string

---

##### `Slo`<sup>Required</sup> <a name="Slo" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.property.slo"></a>

```go
func Slo() *[]*string
```

- *Type:* *[]*string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.property.status"></a>

```go
func Status() *[]*string
```

- *Type:* *[]*string

---

##### `TargetHostname`<sup>Required</sup> <a name="TargetHostname" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.property.targetHostname"></a>

```go
func TargetHostname() *[]*string
```

- *Type:* *[]*string

---

##### `TargetIp`<sup>Required</sup> <a name="TargetIp" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.property.targetIp"></a>

```go
func TargetIp() *[]*string
```

- *Type:* *[]*string

---

##### `TargetZoneName`<sup>Required</sup> <a name="TargetZoneName" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.property.targetZoneName"></a>

```go
func TargetZoneName() *[]*string
```

- *Type:* *[]*string

---

##### `TrafficExclusions`<sup>Required</sup> <a name="TrafficExclusions" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.property.trafficExclusions"></a>

```go
func TrafficExclusions() *[]*string
```

- *Type:* *[]*string

---

##### `TunnelId`<sup>Required</sup> <a name="TunnelId" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.property.tunnelId"></a>

```go
func TunnelId() *[]*string
```

- *Type:* *[]*string

---

##### `TunnelName`<sup>Required</sup> <a name="TunnelName" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.property.tunnelName"></a>

```go
func TunnelName() *[]*string
```

- *Type:* *[]*string

---

##### `Where`<sup>Required</sup> <a name="Where" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.property.where"></a>

```go
func Where() *[]*string
```

- *Type:* *[]*string

---

##### `Zones`<sup>Required</sup> <a name="Zones" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.property.zones"></a>

```go
func Zones() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference.property.internalValue"></a>

```go
func InternalValue() DataCloudflareNotificationPoliciesResultFilters
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFilters">DataCloudflareNotificationPoliciesResultFilters</a>

---


### DataCloudflareNotificationPoliciesResultList <a name="DataCloudflareNotificationPoliciesResultList" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/datacloudflarenotificationpolicies"

datacloudflarenotificationpolicies.NewDataCloudflareNotificationPoliciesResultList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataCloudflareNotificationPoliciesResultList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultList.get"></a>

```go
func Get(index *f64) DataCloudflareNotificationPoliciesResultOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataCloudflareNotificationPoliciesResultMechanismsEmailList <a name="DataCloudflareNotificationPoliciesResultMechanismsEmailList" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsEmailList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsEmailList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/datacloudflarenotificationpolicies"

datacloudflarenotificationpolicies.NewDataCloudflareNotificationPoliciesResultMechanismsEmailList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataCloudflareNotificationPoliciesResultMechanismsEmailList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsEmailList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsEmailList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsEmailList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsEmailList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsEmailList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsEmailList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsEmailList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsEmailList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsEmailList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsEmailList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsEmailList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsEmailList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsEmailList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsEmailList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsEmailList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsEmailList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsEmailList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsEmailList.get"></a>

```go
func Get(index *f64) DataCloudflareNotificationPoliciesResultMechanismsEmailOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsEmailList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsEmailList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsEmailList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsEmailList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsEmailList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataCloudflareNotificationPoliciesResultMechanismsEmailOutputReference <a name="DataCloudflareNotificationPoliciesResultMechanismsEmailOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsEmailOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsEmailOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/datacloudflarenotificationpolicies"

datacloudflarenotificationpolicies.NewDataCloudflareNotificationPoliciesResultMechanismsEmailOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataCloudflareNotificationPoliciesResultMechanismsEmailOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsEmailOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsEmailOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsEmailOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsEmailOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsEmailOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsEmailOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsEmailOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsEmailOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsEmailOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsEmailOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsEmailOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsEmailOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsEmailOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsEmailOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsEmailOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsEmailOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsEmailOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsEmailOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsEmailOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsEmailOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsEmailOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsEmailOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsEmailOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsEmailOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsEmailOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsEmailOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsEmailOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsEmailOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsEmailOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsEmailOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsEmailOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsEmailOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsEmailOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsEmailOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsEmailOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsEmailOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsEmailOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsEmailOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsEmailOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsEmailOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsEmailOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsEmailOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsEmailOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsEmailOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsEmailOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsEmailOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsEmailOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsEmailOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsEmailOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsEmail">DataCloudflareNotificationPoliciesResultMechanismsEmail</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsEmailOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsEmailOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsEmailOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsEmailOutputReference.property.internalValue"></a>

```go
func InternalValue() DataCloudflareNotificationPoliciesResultMechanismsEmail
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsEmail">DataCloudflareNotificationPoliciesResultMechanismsEmail</a>

---


### DataCloudflareNotificationPoliciesResultMechanismsOutputReference <a name="DataCloudflareNotificationPoliciesResultMechanismsOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/datacloudflarenotificationpolicies"

datacloudflarenotificationpolicies.NewDataCloudflareNotificationPoliciesResultMechanismsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataCloudflareNotificationPoliciesResultMechanismsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsOutputReference.property.email">Email</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsEmailList">DataCloudflareNotificationPoliciesResultMechanismsEmailList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsOutputReference.property.pagerduty">Pagerduty</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsPagerdutyList">DataCloudflareNotificationPoliciesResultMechanismsPagerdutyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsOutputReference.property.webhooks">Webhooks</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsWebhooksList">DataCloudflareNotificationPoliciesResultMechanismsWebhooksList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanisms">DataCloudflareNotificationPoliciesResultMechanisms</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Email`<sup>Required</sup> <a name="Email" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsOutputReference.property.email"></a>

```go
func Email() DataCloudflareNotificationPoliciesResultMechanismsEmailList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsEmailList">DataCloudflareNotificationPoliciesResultMechanismsEmailList</a>

---

##### `Pagerduty`<sup>Required</sup> <a name="Pagerduty" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsOutputReference.property.pagerduty"></a>

```go
func Pagerduty() DataCloudflareNotificationPoliciesResultMechanismsPagerdutyList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsPagerdutyList">DataCloudflareNotificationPoliciesResultMechanismsPagerdutyList</a>

---

##### `Webhooks`<sup>Required</sup> <a name="Webhooks" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsOutputReference.property.webhooks"></a>

```go
func Webhooks() DataCloudflareNotificationPoliciesResultMechanismsWebhooksList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsWebhooksList">DataCloudflareNotificationPoliciesResultMechanismsWebhooksList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataCloudflareNotificationPoliciesResultMechanisms
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanisms">DataCloudflareNotificationPoliciesResultMechanisms</a>

---


### DataCloudflareNotificationPoliciesResultMechanismsPagerdutyList <a name="DataCloudflareNotificationPoliciesResultMechanismsPagerdutyList" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsPagerdutyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsPagerdutyList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/datacloudflarenotificationpolicies"

datacloudflarenotificationpolicies.NewDataCloudflareNotificationPoliciesResultMechanismsPagerdutyList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataCloudflareNotificationPoliciesResultMechanismsPagerdutyList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsPagerdutyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsPagerdutyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsPagerdutyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsPagerdutyList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsPagerdutyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsPagerdutyList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsPagerdutyList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsPagerdutyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsPagerdutyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsPagerdutyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsPagerdutyList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsPagerdutyList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsPagerdutyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsPagerdutyList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsPagerdutyList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsPagerdutyList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsPagerdutyList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsPagerdutyList.get"></a>

```go
func Get(index *f64) DataCloudflareNotificationPoliciesResultMechanismsPagerdutyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsPagerdutyList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsPagerdutyList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsPagerdutyList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsPagerdutyList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsPagerdutyList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataCloudflareNotificationPoliciesResultMechanismsPagerdutyOutputReference <a name="DataCloudflareNotificationPoliciesResultMechanismsPagerdutyOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsPagerdutyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsPagerdutyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/datacloudflarenotificationpolicies"

datacloudflarenotificationpolicies.NewDataCloudflareNotificationPoliciesResultMechanismsPagerdutyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataCloudflareNotificationPoliciesResultMechanismsPagerdutyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsPagerdutyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsPagerdutyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsPagerdutyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsPagerdutyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsPagerdutyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsPagerdutyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsPagerdutyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsPagerdutyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsPagerdutyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsPagerdutyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsPagerdutyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsPagerdutyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsPagerdutyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsPagerdutyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsPagerdutyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsPagerdutyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsPagerdutyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsPagerdutyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsPagerdutyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsPagerdutyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsPagerdutyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsPagerdutyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsPagerdutyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsPagerdutyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsPagerdutyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsPagerdutyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsPagerdutyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsPagerdutyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsPagerdutyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsPagerdutyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsPagerdutyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsPagerdutyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsPagerdutyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsPagerdutyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsPagerdutyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsPagerdutyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsPagerdutyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsPagerdutyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsPagerdutyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsPagerdutyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsPagerdutyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsPagerdutyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsPagerdutyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsPagerdutyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsPagerdutyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsPagerdutyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsPagerdutyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsPagerdutyOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsPagerdutyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsPagerduty">DataCloudflareNotificationPoliciesResultMechanismsPagerduty</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsPagerdutyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsPagerdutyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsPagerdutyOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsPagerdutyOutputReference.property.internalValue"></a>

```go
func InternalValue() DataCloudflareNotificationPoliciesResultMechanismsPagerduty
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsPagerduty">DataCloudflareNotificationPoliciesResultMechanismsPagerduty</a>

---


### DataCloudflareNotificationPoliciesResultMechanismsWebhooksList <a name="DataCloudflareNotificationPoliciesResultMechanismsWebhooksList" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsWebhooksList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsWebhooksList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/datacloudflarenotificationpolicies"

datacloudflarenotificationpolicies.NewDataCloudflareNotificationPoliciesResultMechanismsWebhooksList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataCloudflareNotificationPoliciesResultMechanismsWebhooksList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsWebhooksList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsWebhooksList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsWebhooksList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsWebhooksList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsWebhooksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsWebhooksList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsWebhooksList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsWebhooksList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsWebhooksList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsWebhooksList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsWebhooksList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsWebhooksList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsWebhooksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsWebhooksList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsWebhooksList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsWebhooksList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsWebhooksList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsWebhooksList.get"></a>

```go
func Get(index *f64) DataCloudflareNotificationPoliciesResultMechanismsWebhooksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsWebhooksList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsWebhooksList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsWebhooksList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsWebhooksList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsWebhooksList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataCloudflareNotificationPoliciesResultMechanismsWebhooksOutputReference <a name="DataCloudflareNotificationPoliciesResultMechanismsWebhooksOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsWebhooksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsWebhooksOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/datacloudflarenotificationpolicies"

datacloudflarenotificationpolicies.NewDataCloudflareNotificationPoliciesResultMechanismsWebhooksOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataCloudflareNotificationPoliciesResultMechanismsWebhooksOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsWebhooksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsWebhooksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsWebhooksOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsWebhooksOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsWebhooksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsWebhooksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsWebhooksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsWebhooksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsWebhooksOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsWebhooksOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsWebhooksOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsWebhooksOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsWebhooksOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsWebhooksOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsWebhooksOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsWebhooksOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsWebhooksOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsWebhooksOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsWebhooksOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsWebhooksOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsWebhooksOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsWebhooksOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsWebhooksOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsWebhooksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsWebhooksOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsWebhooksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsWebhooksOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsWebhooksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsWebhooksOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsWebhooksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsWebhooksOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsWebhooksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsWebhooksOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsWebhooksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsWebhooksOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsWebhooksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsWebhooksOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsWebhooksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsWebhooksOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsWebhooksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsWebhooksOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsWebhooksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsWebhooksOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsWebhooksOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsWebhooksOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsWebhooksOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsWebhooksOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsWebhooksOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsWebhooksOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsWebhooks">DataCloudflareNotificationPoliciesResultMechanismsWebhooks</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsWebhooksOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsWebhooksOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsWebhooksOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsWebhooksOutputReference.property.internalValue"></a>

```go
func InternalValue() DataCloudflareNotificationPoliciesResultMechanismsWebhooks
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsWebhooks">DataCloudflareNotificationPoliciesResultMechanismsWebhooks</a>

---


### DataCloudflareNotificationPoliciesResultOutputReference <a name="DataCloudflareNotificationPoliciesResultOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/datacloudflarenotificationpolicies"

datacloudflarenotificationpolicies.NewDataCloudflareNotificationPoliciesResultOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataCloudflareNotificationPoliciesResultOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultOutputReference.property.alertInterval">AlertInterval</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultOutputReference.property.alertType">AlertType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultOutputReference.property.created">Created</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultOutputReference.property.enabled">Enabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultOutputReference.property.filters">Filters</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference">DataCloudflareNotificationPoliciesResultFiltersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultOutputReference.property.mechanisms">Mechanisms</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsOutputReference">DataCloudflareNotificationPoliciesResultMechanismsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultOutputReference.property.modified">Modified</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResult">DataCloudflareNotificationPoliciesResult</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AlertInterval`<sup>Required</sup> <a name="AlertInterval" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultOutputReference.property.alertInterval"></a>

```go
func AlertInterval() *string
```

- *Type:* *string

---

##### `AlertType`<sup>Required</sup> <a name="AlertType" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultOutputReference.property.alertType"></a>

```go
func AlertType() *string
```

- *Type:* *string

---

##### `Created`<sup>Required</sup> <a name="Created" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultOutputReference.property.created"></a>

```go
func Created() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultOutputReference.property.enabled"></a>

```go
func Enabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Filters`<sup>Required</sup> <a name="Filters" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultOutputReference.property.filters"></a>

```go
func Filters() DataCloudflareNotificationPoliciesResultFiltersOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultFiltersOutputReference">DataCloudflareNotificationPoliciesResultFiltersOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Mechanisms`<sup>Required</sup> <a name="Mechanisms" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultOutputReference.property.mechanisms"></a>

```go
func Mechanisms() DataCloudflareNotificationPoliciesResultMechanismsOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultMechanismsOutputReference">DataCloudflareNotificationPoliciesResultMechanismsOutputReference</a>

---

##### `Modified`<sup>Required</sup> <a name="Modified" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultOutputReference.property.modified"></a>

```go
func Modified() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResultOutputReference.property.internalValue"></a>

```go
func InternalValue() DataCloudflareNotificationPoliciesResult
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareNotificationPolicies.DataCloudflareNotificationPoliciesResult">DataCloudflareNotificationPoliciesResult</a>

---



