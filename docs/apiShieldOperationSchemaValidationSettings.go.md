# `cloudflare_api_shield_operation_schema_validation_settings`

Refer to the Terraform Registory for docs: [`cloudflare_api_shield_operation_schema_validation_settings`](https://registry.terraform.io/providers/cloudflare/cloudflare/4.18.0/docs/resources/api_shield_operation_schema_validation_settings).

# `apiShieldOperationSchemaValidationSettings` Submodule <a name="`apiShieldOperationSchemaValidationSettings` Submodule" id="@cdktf/provider-cloudflare.apiShieldOperationSchemaValidationSettings"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApiShieldOperationSchemaValidationSettings <a name="ApiShieldOperationSchemaValidationSettings" id="@cdktf/provider-cloudflare.apiShieldOperationSchemaValidationSettings.ApiShieldOperationSchemaValidationSettings"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.18.0/docs/resources/api_shield_operation_schema_validation_settings cloudflare_api_shield_operation_schema_validation_settings}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.apiShieldOperationSchemaValidationSettings.ApiShieldOperationSchemaValidationSettings.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v10/apishieldoperationschemavalidationsettings"

apishieldoperationschemavalidationsettings.NewApiShieldOperationSchemaValidationSettings(scope Construct, id *string, config ApiShieldOperationSchemaValidationSettingsConfig) ApiShieldOperationSchemaValidationSettings
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperationSchemaValidationSettings.ApiShieldOperationSchemaValidationSettings.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperationSchemaValidationSettings.ApiShieldOperationSchemaValidationSettings.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperationSchemaValidationSettings.ApiShieldOperationSchemaValidationSettings.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-cloudflare.apiShieldOperationSchemaValidationSettings.ApiShieldOperationSchemaValidationSettingsConfig">ApiShieldOperationSchemaValidationSettingsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.apiShieldOperationSchemaValidationSettings.ApiShieldOperationSchemaValidationSettings.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.apiShieldOperationSchemaValidationSettings.ApiShieldOperationSchemaValidationSettings.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-cloudflare.apiShieldOperationSchemaValidationSettings.ApiShieldOperationSchemaValidationSettings.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.apiShieldOperationSchemaValidationSettings.ApiShieldOperationSchemaValidationSettingsConfig">ApiShieldOperationSchemaValidationSettingsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperationSchemaValidationSettings.ApiShieldOperationSchemaValidationSettings.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperationSchemaValidationSettings.ApiShieldOperationSchemaValidationSettings.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperationSchemaValidationSettings.ApiShieldOperationSchemaValidationSettings.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperationSchemaValidationSettings.ApiShieldOperationSchemaValidationSettings.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperationSchemaValidationSettings.ApiShieldOperationSchemaValidationSettings.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperationSchemaValidationSettings.ApiShieldOperationSchemaValidationSettings.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperationSchemaValidationSettings.ApiShieldOperationSchemaValidationSettings.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperationSchemaValidationSettings.ApiShieldOperationSchemaValidationSettings.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperationSchemaValidationSettings.ApiShieldOperationSchemaValidationSettings.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperationSchemaValidationSettings.ApiShieldOperationSchemaValidationSettings.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperationSchemaValidationSettings.ApiShieldOperationSchemaValidationSettings.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperationSchemaValidationSettings.ApiShieldOperationSchemaValidationSettings.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperationSchemaValidationSettings.ApiShieldOperationSchemaValidationSettings.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperationSchemaValidationSettings.ApiShieldOperationSchemaValidationSettings.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperationSchemaValidationSettings.ApiShieldOperationSchemaValidationSettings.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperationSchemaValidationSettings.ApiShieldOperationSchemaValidationSettings.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperationSchemaValidationSettings.ApiShieldOperationSchemaValidationSettings.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperationSchemaValidationSettings.ApiShieldOperationSchemaValidationSettings.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperationSchemaValidationSettings.ApiShieldOperationSchemaValidationSettings.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperationSchemaValidationSettings.ApiShieldOperationSchemaValidationSettings.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperationSchemaValidationSettings.ApiShieldOperationSchemaValidationSettings.resetMitigationAction">ResetMitigationAction</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.apiShieldOperationSchemaValidationSettings.ApiShieldOperationSchemaValidationSettings.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-cloudflare.apiShieldOperationSchemaValidationSettings.ApiShieldOperationSchemaValidationSettings.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.apiShieldOperationSchemaValidationSettings.ApiShieldOperationSchemaValidationSettings.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.apiShieldOperationSchemaValidationSettings.ApiShieldOperationSchemaValidationSettings.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-cloudflare.apiShieldOperationSchemaValidationSettings.ApiShieldOperationSchemaValidationSettings.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.apiShieldOperationSchemaValidationSettings.ApiShieldOperationSchemaValidationSettings.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-cloudflare.apiShieldOperationSchemaValidationSettings.ApiShieldOperationSchemaValidationSettings.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-cloudflare.apiShieldOperationSchemaValidationSettings.ApiShieldOperationSchemaValidationSettings.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-cloudflare.apiShieldOperationSchemaValidationSettings.ApiShieldOperationSchemaValidationSettings.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-cloudflare.apiShieldOperationSchemaValidationSettings.ApiShieldOperationSchemaValidationSettings.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.apiShieldOperationSchemaValidationSettings.ApiShieldOperationSchemaValidationSettings.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.apiShieldOperationSchemaValidationSettings.ApiShieldOperationSchemaValidationSettings.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.apiShieldOperationSchemaValidationSettings.ApiShieldOperationSchemaValidationSettings.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.apiShieldOperationSchemaValidationSettings.ApiShieldOperationSchemaValidationSettings.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.apiShieldOperationSchemaValidationSettings.ApiShieldOperationSchemaValidationSettings.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.apiShieldOperationSchemaValidationSettings.ApiShieldOperationSchemaValidationSettings.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.apiShieldOperationSchemaValidationSettings.ApiShieldOperationSchemaValidationSettings.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.apiShieldOperationSchemaValidationSettings.ApiShieldOperationSchemaValidationSettings.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.apiShieldOperationSchemaValidationSettings.ApiShieldOperationSchemaValidationSettings.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.apiShieldOperationSchemaValidationSettings.ApiShieldOperationSchemaValidationSettings.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.apiShieldOperationSchemaValidationSettings.ApiShieldOperationSchemaValidationSettings.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.apiShieldOperationSchemaValidationSettings.ApiShieldOperationSchemaValidationSettings.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.apiShieldOperationSchemaValidationSettings.ApiShieldOperationSchemaValidationSettings.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.apiShieldOperationSchemaValidationSettings.ApiShieldOperationSchemaValidationSettings.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.apiShieldOperationSchemaValidationSettings.ApiShieldOperationSchemaValidationSettings.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.apiShieldOperationSchemaValidationSettings.ApiShieldOperationSchemaValidationSettings.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.apiShieldOperationSchemaValidationSettings.ApiShieldOperationSchemaValidationSettings.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.apiShieldOperationSchemaValidationSettings.ApiShieldOperationSchemaValidationSettings.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.apiShieldOperationSchemaValidationSettings.ApiShieldOperationSchemaValidationSettings.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-cloudflare.apiShieldOperationSchemaValidationSettings.ApiShieldOperationSchemaValidationSettings.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.apiShieldOperationSchemaValidationSettings.ApiShieldOperationSchemaValidationSettings.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.apiShieldOperationSchemaValidationSettings.ApiShieldOperationSchemaValidationSettings.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.apiShieldOperationSchemaValidationSettings.ApiShieldOperationSchemaValidationSettings.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.apiShieldOperationSchemaValidationSettings.ApiShieldOperationSchemaValidationSettings.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-cloudflare.apiShieldOperationSchemaValidationSettings.ApiShieldOperationSchemaValidationSettings.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.apiShieldOperationSchemaValidationSettings.ApiShieldOperationSchemaValidationSettings.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-cloudflare.apiShieldOperationSchemaValidationSettings.ApiShieldOperationSchemaValidationSettings.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-cloudflare.apiShieldOperationSchemaValidationSettings.ApiShieldOperationSchemaValidationSettings.resetId"></a>

```go
func ResetId()
```

##### `ResetMitigationAction` <a name="ResetMitigationAction" id="@cdktf/provider-cloudflare.apiShieldOperationSchemaValidationSettings.ApiShieldOperationSchemaValidationSettings.resetMitigationAction"></a>

```go
func ResetMitigationAction()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperationSchemaValidationSettings.ApiShieldOperationSchemaValidationSettings.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperationSchemaValidationSettings.ApiShieldOperationSchemaValidationSettings.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperationSchemaValidationSettings.ApiShieldOperationSchemaValidationSettings.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperationSchemaValidationSettings.ApiShieldOperationSchemaValidationSettings.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ApiShieldOperationSchemaValidationSettings resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-cloudflare.apiShieldOperationSchemaValidationSettings.ApiShieldOperationSchemaValidationSettings.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v10/apishieldoperationschemavalidationsettings"

apishieldoperationschemavalidationsettings.ApiShieldOperationSchemaValidationSettings_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.apiShieldOperationSchemaValidationSettings.ApiShieldOperationSchemaValidationSettings.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-cloudflare.apiShieldOperationSchemaValidationSettings.ApiShieldOperationSchemaValidationSettings.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v10/apishieldoperationschemavalidationsettings"

apishieldoperationschemavalidationsettings.ApiShieldOperationSchemaValidationSettings_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.apiShieldOperationSchemaValidationSettings.ApiShieldOperationSchemaValidationSettings.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-cloudflare.apiShieldOperationSchemaValidationSettings.ApiShieldOperationSchemaValidationSettings.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v10/apishieldoperationschemavalidationsettings"

apishieldoperationschemavalidationsettings.ApiShieldOperationSchemaValidationSettings_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.apiShieldOperationSchemaValidationSettings.ApiShieldOperationSchemaValidationSettings.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-cloudflare.apiShieldOperationSchemaValidationSettings.ApiShieldOperationSchemaValidationSettings.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v10/apishieldoperationschemavalidationsettings"

apishieldoperationschemavalidationsettings.ApiShieldOperationSchemaValidationSettings_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a ApiShieldOperationSchemaValidationSettings resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.apiShieldOperationSchemaValidationSettings.ApiShieldOperationSchemaValidationSettings.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.apiShieldOperationSchemaValidationSettings.ApiShieldOperationSchemaValidationSettings.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ApiShieldOperationSchemaValidationSettings to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.apiShieldOperationSchemaValidationSettings.ApiShieldOperationSchemaValidationSettings.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ApiShieldOperationSchemaValidationSettings that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.18.0/docs/resources/api_shield_operation_schema_validation_settings#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.apiShieldOperationSchemaValidationSettings.ApiShieldOperationSchemaValidationSettings.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the ApiShieldOperationSchemaValidationSettings to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperationSchemaValidationSettings.ApiShieldOperationSchemaValidationSettings.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperationSchemaValidationSettings.ApiShieldOperationSchemaValidationSettings.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperationSchemaValidationSettings.ApiShieldOperationSchemaValidationSettings.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperationSchemaValidationSettings.ApiShieldOperationSchemaValidationSettings.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperationSchemaValidationSettings.ApiShieldOperationSchemaValidationSettings.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperationSchemaValidationSettings.ApiShieldOperationSchemaValidationSettings.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperationSchemaValidationSettings.ApiShieldOperationSchemaValidationSettings.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperationSchemaValidationSettings.ApiShieldOperationSchemaValidationSettings.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperationSchemaValidationSettings.ApiShieldOperationSchemaValidationSettings.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperationSchemaValidationSettings.ApiShieldOperationSchemaValidationSettings.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperationSchemaValidationSettings.ApiShieldOperationSchemaValidationSettings.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperationSchemaValidationSettings.ApiShieldOperationSchemaValidationSettings.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperationSchemaValidationSettings.ApiShieldOperationSchemaValidationSettings.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperationSchemaValidationSettings.ApiShieldOperationSchemaValidationSettings.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperationSchemaValidationSettings.ApiShieldOperationSchemaValidationSettings.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperationSchemaValidationSettings.ApiShieldOperationSchemaValidationSettings.property.mitigationActionInput">MitigationActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperationSchemaValidationSettings.ApiShieldOperationSchemaValidationSettings.property.operationIdInput">OperationIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperationSchemaValidationSettings.ApiShieldOperationSchemaValidationSettings.property.zoneIdInput">ZoneIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperationSchemaValidationSettings.ApiShieldOperationSchemaValidationSettings.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperationSchemaValidationSettings.ApiShieldOperationSchemaValidationSettings.property.mitigationAction">MitigationAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperationSchemaValidationSettings.ApiShieldOperationSchemaValidationSettings.property.operationId">OperationId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperationSchemaValidationSettings.ApiShieldOperationSchemaValidationSettings.property.zoneId">ZoneId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-cloudflare.apiShieldOperationSchemaValidationSettings.ApiShieldOperationSchemaValidationSettings.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-cloudflare.apiShieldOperationSchemaValidationSettings.ApiShieldOperationSchemaValidationSettings.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.apiShieldOperationSchemaValidationSettings.ApiShieldOperationSchemaValidationSettings.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-cloudflare.apiShieldOperationSchemaValidationSettings.ApiShieldOperationSchemaValidationSettings.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-cloudflare.apiShieldOperationSchemaValidationSettings.ApiShieldOperationSchemaValidationSettings.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-cloudflare.apiShieldOperationSchemaValidationSettings.ApiShieldOperationSchemaValidationSettings.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-cloudflare.apiShieldOperationSchemaValidationSettings.ApiShieldOperationSchemaValidationSettings.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.apiShieldOperationSchemaValidationSettings.ApiShieldOperationSchemaValidationSettings.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.apiShieldOperationSchemaValidationSettings.ApiShieldOperationSchemaValidationSettings.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.apiShieldOperationSchemaValidationSettings.ApiShieldOperationSchemaValidationSettings.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.apiShieldOperationSchemaValidationSettings.ApiShieldOperationSchemaValidationSettings.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.apiShieldOperationSchemaValidationSettings.ApiShieldOperationSchemaValidationSettings.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.apiShieldOperationSchemaValidationSettings.ApiShieldOperationSchemaValidationSettings.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.apiShieldOperationSchemaValidationSettings.ApiShieldOperationSchemaValidationSettings.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-cloudflare.apiShieldOperationSchemaValidationSettings.ApiShieldOperationSchemaValidationSettings.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `MitigationActionInput`<sup>Optional</sup> <a name="MitigationActionInput" id="@cdktf/provider-cloudflare.apiShieldOperationSchemaValidationSettings.ApiShieldOperationSchemaValidationSettings.property.mitigationActionInput"></a>

```go
func MitigationActionInput() *string
```

- *Type:* *string

---

##### `OperationIdInput`<sup>Optional</sup> <a name="OperationIdInput" id="@cdktf/provider-cloudflare.apiShieldOperationSchemaValidationSettings.ApiShieldOperationSchemaValidationSettings.property.operationIdInput"></a>

```go
func OperationIdInput() *string
```

- *Type:* *string

---

##### `ZoneIdInput`<sup>Optional</sup> <a name="ZoneIdInput" id="@cdktf/provider-cloudflare.apiShieldOperationSchemaValidationSettings.ApiShieldOperationSchemaValidationSettings.property.zoneIdInput"></a>

```go
func ZoneIdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.apiShieldOperationSchemaValidationSettings.ApiShieldOperationSchemaValidationSettings.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `MitigationAction`<sup>Required</sup> <a name="MitigationAction" id="@cdktf/provider-cloudflare.apiShieldOperationSchemaValidationSettings.ApiShieldOperationSchemaValidationSettings.property.mitigationAction"></a>

```go
func MitigationAction() *string
```

- *Type:* *string

---

##### `OperationId`<sup>Required</sup> <a name="OperationId" id="@cdktf/provider-cloudflare.apiShieldOperationSchemaValidationSettings.ApiShieldOperationSchemaValidationSettings.property.operationId"></a>

```go
func OperationId() *string
```

- *Type:* *string

---

##### `ZoneId`<sup>Required</sup> <a name="ZoneId" id="@cdktf/provider-cloudflare.apiShieldOperationSchemaValidationSettings.ApiShieldOperationSchemaValidationSettings.property.zoneId"></a>

```go
func ZoneId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperationSchemaValidationSettings.ApiShieldOperationSchemaValidationSettings.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-cloudflare.apiShieldOperationSchemaValidationSettings.ApiShieldOperationSchemaValidationSettings.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ApiShieldOperationSchemaValidationSettingsConfig <a name="ApiShieldOperationSchemaValidationSettingsConfig" id="@cdktf/provider-cloudflare.apiShieldOperationSchemaValidationSettings.ApiShieldOperationSchemaValidationSettingsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.apiShieldOperationSchemaValidationSettings.ApiShieldOperationSchemaValidationSettingsConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v10/apishieldoperationschemavalidationsettings"

&apishieldoperationschemavalidationsettings.ApiShieldOperationSchemaValidationSettingsConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	OperationId: *string,
	ZoneId: *string,
	Id: *string,
	MitigationAction: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperationSchemaValidationSettings.ApiShieldOperationSchemaValidationSettingsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperationSchemaValidationSettings.ApiShieldOperationSchemaValidationSettingsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperationSchemaValidationSettings.ApiShieldOperationSchemaValidationSettingsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperationSchemaValidationSettings.ApiShieldOperationSchemaValidationSettingsConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperationSchemaValidationSettings.ApiShieldOperationSchemaValidationSettingsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperationSchemaValidationSettings.ApiShieldOperationSchemaValidationSettingsConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperationSchemaValidationSettings.ApiShieldOperationSchemaValidationSettingsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperationSchemaValidationSettings.ApiShieldOperationSchemaValidationSettingsConfig.property.operationId">OperationId</a></code> | <code>*string</code> | Operation ID these settings should apply to. **Modifying this attribute will force creation of a new resource.**. |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperationSchemaValidationSettings.ApiShieldOperationSchemaValidationSettingsConfig.property.zoneId">ZoneId</a></code> | <code>*string</code> | The zone identifier to target for the resource. **Modifying this attribute will force creation of a new resource.**. |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperationSchemaValidationSettings.ApiShieldOperationSchemaValidationSettingsConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.18.0/docs/resources/api_shield_operation_schema_validation_settings#id ApiShieldOperationSchemaValidationSettings#id}. |
| <code><a href="#@cdktf/provider-cloudflare.apiShieldOperationSchemaValidationSettings.ApiShieldOperationSchemaValidationSettingsConfig.property.mitigationAction">MitigationAction</a></code> | <code>*string</code> | The mitigation action to apply to this operation. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.apiShieldOperationSchemaValidationSettings.ApiShieldOperationSchemaValidationSettingsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.apiShieldOperationSchemaValidationSettings.ApiShieldOperationSchemaValidationSettingsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.apiShieldOperationSchemaValidationSettings.ApiShieldOperationSchemaValidationSettingsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.apiShieldOperationSchemaValidationSettings.ApiShieldOperationSchemaValidationSettingsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.apiShieldOperationSchemaValidationSettings.ApiShieldOperationSchemaValidationSettingsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.apiShieldOperationSchemaValidationSettings.ApiShieldOperationSchemaValidationSettingsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.apiShieldOperationSchemaValidationSettings.ApiShieldOperationSchemaValidationSettingsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `OperationId`<sup>Required</sup> <a name="OperationId" id="@cdktf/provider-cloudflare.apiShieldOperationSchemaValidationSettings.ApiShieldOperationSchemaValidationSettingsConfig.property.operationId"></a>

```go
OperationId *string
```

- *Type:* *string

Operation ID these settings should apply to. **Modifying this attribute will force creation of a new resource.**.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.18.0/docs/resources/api_shield_operation_schema_validation_settings#operation_id ApiShieldOperationSchemaValidationSettings#operation_id}

---

##### `ZoneId`<sup>Required</sup> <a name="ZoneId" id="@cdktf/provider-cloudflare.apiShieldOperationSchemaValidationSettings.ApiShieldOperationSchemaValidationSettingsConfig.property.zoneId"></a>

```go
ZoneId *string
```

- *Type:* *string

The zone identifier to target for the resource. **Modifying this attribute will force creation of a new resource.**.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.18.0/docs/resources/api_shield_operation_schema_validation_settings#zone_id ApiShieldOperationSchemaValidationSettings#zone_id}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-cloudflare.apiShieldOperationSchemaValidationSettings.ApiShieldOperationSchemaValidationSettingsConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.18.0/docs/resources/api_shield_operation_schema_validation_settings#id ApiShieldOperationSchemaValidationSettings#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `MitigationAction`<sup>Optional</sup> <a name="MitigationAction" id="@cdktf/provider-cloudflare.apiShieldOperationSchemaValidationSettings.ApiShieldOperationSchemaValidationSettingsConfig.property.mitigationAction"></a>

```go
MitigationAction *string
```

- *Type:* *string

The mitigation action to apply to this operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.18.0/docs/resources/api_shield_operation_schema_validation_settings#mitigation_action ApiShieldOperationSchemaValidationSettings#mitigation_action}

---


