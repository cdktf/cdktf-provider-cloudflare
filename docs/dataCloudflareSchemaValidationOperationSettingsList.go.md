# `dataCloudflareSchemaValidationOperationSettingsList` Submodule <a name="`dataCloudflareSchemaValidationOperationSettingsList` Submodule" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareSchemaValidationOperationSettingsList <a name="DataCloudflareSchemaValidationOperationSettingsList" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsList"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/data-sources/schema_validation_operation_settings_list cloudflare_schema_validation_operation_settings_list}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflareschemavalidationoperationsettingslist"

datacloudflareschemavalidationoperationsettingslist.NewDataCloudflareSchemaValidationOperationSettingsList(scope Construct, id *string, config DataCloudflareSchemaValidationOperationSettingsListConfig) DataCloudflareSchemaValidationOperationSettingsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsList.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsList.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsList.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsListConfig">DataCloudflareSchemaValidationOperationSettingsListConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsList.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsList.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsList.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsListConfig">DataCloudflareSchemaValidationOperationSettingsListConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsList.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsList.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsList.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsList.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsList.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsList.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsList.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsList.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsList.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsList.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsList.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsList.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsList.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsList.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsList.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsList.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsList.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsList.resetMaxItems">ResetMaxItems</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsList.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsList.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsList.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsList.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsList.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsList.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsList.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsList.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsList.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsList.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsList.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsList.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsList.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsList.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsList.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsList.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsList.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsList.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsList.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsList.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsList.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsList.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsList.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsList.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsList.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsList.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsList.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsList.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsList.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsList.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetMaxItems` <a name="ResetMaxItems" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsList.resetMaxItems"></a>

```go
func ResetMaxItems()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsList.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsList.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsList.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsList.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataCloudflareSchemaValidationOperationSettingsList resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsList.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflareschemavalidationoperationsettingslist"

datacloudflareschemavalidationoperationsettingslist.DataCloudflareSchemaValidationOperationSettingsList_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsList.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsList.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflareschemavalidationoperationsettingslist"

datacloudflareschemavalidationoperationsettingslist.DataCloudflareSchemaValidationOperationSettingsList_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsList.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsList.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflareschemavalidationoperationsettingslist"

datacloudflareschemavalidationoperationsettingslist.DataCloudflareSchemaValidationOperationSettingsList_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsList.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsList.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflareschemavalidationoperationsettingslist"

datacloudflareschemavalidationoperationsettingslist.DataCloudflareSchemaValidationOperationSettingsList_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataCloudflareSchemaValidationOperationSettingsList resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsList.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsList.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataCloudflareSchemaValidationOperationSettingsList to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsList.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataCloudflareSchemaValidationOperationSettingsList that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/data-sources/schema_validation_operation_settings_list#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsList.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataCloudflareSchemaValidationOperationSettingsList to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsList.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsList.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsList.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsList.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsList.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsList.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsList.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsList.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsList.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsList.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsList.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsList.property.result">Result</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsListResultList">DataCloudflareSchemaValidationOperationSettingsListResultList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsList.property.maxItemsInput">MaxItemsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsList.property.zoneIdInput">ZoneIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsList.property.maxItems">MaxItems</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsList.property.zoneId">ZoneId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsList.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsList.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsList.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsList.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsList.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsList.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsList.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsList.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsList.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsList.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsList.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Result`<sup>Required</sup> <a name="Result" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsList.property.result"></a>

```go
func Result() DataCloudflareSchemaValidationOperationSettingsListResultList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsListResultList">DataCloudflareSchemaValidationOperationSettingsListResultList</a>

---

##### `MaxItemsInput`<sup>Optional</sup> <a name="MaxItemsInput" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsList.property.maxItemsInput"></a>

```go
func MaxItemsInput() *f64
```

- *Type:* *f64

---

##### `ZoneIdInput`<sup>Optional</sup> <a name="ZoneIdInput" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsList.property.zoneIdInput"></a>

```go
func ZoneIdInput() *string
```

- *Type:* *string

---

##### `MaxItems`<sup>Required</sup> <a name="MaxItems" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsList.property.maxItems"></a>

```go
func MaxItems() *f64
```

- *Type:* *f64

---

##### `ZoneId`<sup>Required</sup> <a name="ZoneId" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsList.property.zoneId"></a>

```go
func ZoneId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsList.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsList.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareSchemaValidationOperationSettingsListConfig <a name="DataCloudflareSchemaValidationOperationSettingsListConfig" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsListConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsListConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflareschemavalidationoperationsettingslist"

&datacloudflareschemavalidationoperationsettingslist.DataCloudflareSchemaValidationOperationSettingsListConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ZoneId: *string,
	MaxItems: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsListConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsListConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsListConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsListConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsListConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsListConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsListConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsListConfig.property.zoneId">ZoneId</a></code> | <code>*string</code> | Identifier. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsListConfig.property.maxItems">MaxItems</a></code> | <code>*f64</code> | Max items to fetch, default: 1000. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsListConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsListConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsListConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsListConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsListConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsListConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsListConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ZoneId`<sup>Required</sup> <a name="ZoneId" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsListConfig.property.zoneId"></a>

```go
ZoneId *string
```

- *Type:* *string

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/data-sources/schema_validation_operation_settings_list#zone_id DataCloudflareSchemaValidationOperationSettingsList#zone_id}

---

##### `MaxItems`<sup>Optional</sup> <a name="MaxItems" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsListConfig.property.maxItems"></a>

```go
MaxItems *f64
```

- *Type:* *f64

Max items to fetch, default: 1000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/data-sources/schema_validation_operation_settings_list#max_items DataCloudflareSchemaValidationOperationSettingsList#max_items}

---

### DataCloudflareSchemaValidationOperationSettingsListResult <a name="DataCloudflareSchemaValidationOperationSettingsListResult" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsListResult"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsListResult.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflareschemavalidationoperationsettingslist"

&datacloudflareschemavalidationoperationsettingslist.DataCloudflareSchemaValidationOperationSettingsListResult {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareSchemaValidationOperationSettingsListResultList <a name="DataCloudflareSchemaValidationOperationSettingsListResultList" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsListResultList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsListResultList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflareschemavalidationoperationsettingslist"

datacloudflareschemavalidationoperationsettingslist.NewDataCloudflareSchemaValidationOperationSettingsListResultList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataCloudflareSchemaValidationOperationSettingsListResultList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsListResultList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsListResultList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsListResultList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsListResultList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsListResultList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsListResultList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsListResultList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsListResultList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsListResultList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsListResultList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsListResultList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsListResultList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsListResultList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsListResultList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsListResultList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsListResultList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsListResultList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsListResultList.get"></a>

```go
func Get(index *f64) DataCloudflareSchemaValidationOperationSettingsListResultOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsListResultList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsListResultList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsListResultList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsListResultList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsListResultList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataCloudflareSchemaValidationOperationSettingsListResultOutputReference <a name="DataCloudflareSchemaValidationOperationSettingsListResultOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsListResultOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsListResultOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/datacloudflareschemavalidationoperationsettingslist"

datacloudflareschemavalidationoperationsettingslist.NewDataCloudflareSchemaValidationOperationSettingsListResultOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataCloudflareSchemaValidationOperationSettingsListResultOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsListResultOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsListResultOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsListResultOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsListResultOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsListResultOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsListResultOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsListResultOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsListResultOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsListResultOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsListResultOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsListResultOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsListResultOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsListResultOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsListResultOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsListResultOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsListResultOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsListResultOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsListResultOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsListResultOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsListResultOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsListResultOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsListResultOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsListResultOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsListResultOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsListResultOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsListResultOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsListResultOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsListResultOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsListResultOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsListResultOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsListResultOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsListResultOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsListResultOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsListResultOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsListResultOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsListResultOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsListResultOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsListResultOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsListResultOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsListResultOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsListResultOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsListResultOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsListResultOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsListResultOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsListResultOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsListResultOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsListResultOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsListResultOutputReference.property.mitigationAction">MitigationAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsListResultOutputReference.property.operationId">OperationId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsListResultOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsListResult">DataCloudflareSchemaValidationOperationSettingsListResult</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsListResultOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsListResultOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MitigationAction`<sup>Required</sup> <a name="MitigationAction" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsListResultOutputReference.property.mitigationAction"></a>

```go
func MitigationAction() *string
```

- *Type:* *string

---

##### `OperationId`<sup>Required</sup> <a name="OperationId" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsListResultOutputReference.property.operationId"></a>

```go
func OperationId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsListResultOutputReference.property.internalValue"></a>

```go
func InternalValue() DataCloudflareSchemaValidationOperationSettingsListResult
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationOperationSettingsList.DataCloudflareSchemaValidationOperationSettingsListResult">DataCloudflareSchemaValidationOperationSettingsListResult</a>

---



