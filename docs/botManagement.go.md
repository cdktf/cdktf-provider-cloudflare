# `botManagement` Submodule <a name="`botManagement` Submodule" id="@cdktf/provider-cloudflare.botManagement"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BotManagement <a name="BotManagement" id="@cdktf/provider-cloudflare.botManagement.BotManagement"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.25.0/docs/resources/bot_management cloudflare_bot_management}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.botManagement.BotManagement.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/botmanagement"

botmanagement.NewBotManagement(scope Construct, id *string, config BotManagementConfig) BotManagement
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagement.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagement.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagement.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagementConfig">BotManagementConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.botManagement.BotManagement.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.botManagement.BotManagement.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-cloudflare.botManagement.BotManagement.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.botManagement.BotManagementConfig">BotManagementConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagement.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagement.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagement.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagement.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagement.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagement.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagement.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagement.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagement.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagement.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagement.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagement.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagement.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagement.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagement.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagement.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagement.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagement.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagement.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagement.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagement.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagement.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagement.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagement.resetAutoUpdateModel">ResetAutoUpdateModel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagement.resetEnableJs">ResetEnableJs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagement.resetFightMode">ResetFightMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagement.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagement.resetOptimizeWordpress">ResetOptimizeWordpress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagement.resetSbfmDefinitelyAutomated">ResetSbfmDefinitelyAutomated</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagement.resetSbfmLikelyAutomated">ResetSbfmLikelyAutomated</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagement.resetSbfmStaticResourceProtection">ResetSbfmStaticResourceProtection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagement.resetSbfmVerifiedBots">ResetSbfmVerifiedBots</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagement.resetSuppressSessionScore">ResetSuppressSessionScore</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.botManagement.BotManagement.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-cloudflare.botManagement.BotManagement.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.botManagement.BotManagement.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.botManagement.BotManagement.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-cloudflare.botManagement.BotManagement.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.botManagement.BotManagement.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-cloudflare.botManagement.BotManagement.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-cloudflare.botManagement.BotManagement.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-cloudflare.botManagement.BotManagement.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-cloudflare.botManagement.BotManagement.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-cloudflare.botManagement.BotManagement.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.botManagement.BotManagement.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.botManagement.BotManagement.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.botManagement.BotManagement.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.botManagement.BotManagement.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.botManagement.BotManagement.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.botManagement.BotManagement.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.botManagement.BotManagement.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.botManagement.BotManagement.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.botManagement.BotManagement.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.botManagement.BotManagement.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.botManagement.BotManagement.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.botManagement.BotManagement.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.botManagement.BotManagement.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.botManagement.BotManagement.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.botManagement.BotManagement.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.botManagement.BotManagement.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.botManagement.BotManagement.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.botManagement.BotManagement.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.botManagement.BotManagement.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-cloudflare.botManagement.BotManagement.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-cloudflare.botManagement.BotManagement.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.botManagement.BotManagement.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.botManagement.BotManagement.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.botManagement.BotManagement.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.botManagement.BotManagement.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-cloudflare.botManagement.BotManagement.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.botManagement.BotManagement.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-cloudflare.botManagement.BotManagement.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.botManagement.BotManagement.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-cloudflare.botManagement.BotManagement.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-cloudflare.botManagement.BotManagement.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.botManagement.BotManagement.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetAutoUpdateModel` <a name="ResetAutoUpdateModel" id="@cdktf/provider-cloudflare.botManagement.BotManagement.resetAutoUpdateModel"></a>

```go
func ResetAutoUpdateModel()
```

##### `ResetEnableJs` <a name="ResetEnableJs" id="@cdktf/provider-cloudflare.botManagement.BotManagement.resetEnableJs"></a>

```go
func ResetEnableJs()
```

##### `ResetFightMode` <a name="ResetFightMode" id="@cdktf/provider-cloudflare.botManagement.BotManagement.resetFightMode"></a>

```go
func ResetFightMode()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-cloudflare.botManagement.BotManagement.resetId"></a>

```go
func ResetId()
```

##### `ResetOptimizeWordpress` <a name="ResetOptimizeWordpress" id="@cdktf/provider-cloudflare.botManagement.BotManagement.resetOptimizeWordpress"></a>

```go
func ResetOptimizeWordpress()
```

##### `ResetSbfmDefinitelyAutomated` <a name="ResetSbfmDefinitelyAutomated" id="@cdktf/provider-cloudflare.botManagement.BotManagement.resetSbfmDefinitelyAutomated"></a>

```go
func ResetSbfmDefinitelyAutomated()
```

##### `ResetSbfmLikelyAutomated` <a name="ResetSbfmLikelyAutomated" id="@cdktf/provider-cloudflare.botManagement.BotManagement.resetSbfmLikelyAutomated"></a>

```go
func ResetSbfmLikelyAutomated()
```

##### `ResetSbfmStaticResourceProtection` <a name="ResetSbfmStaticResourceProtection" id="@cdktf/provider-cloudflare.botManagement.BotManagement.resetSbfmStaticResourceProtection"></a>

```go
func ResetSbfmStaticResourceProtection()
```

##### `ResetSbfmVerifiedBots` <a name="ResetSbfmVerifiedBots" id="@cdktf/provider-cloudflare.botManagement.BotManagement.resetSbfmVerifiedBots"></a>

```go
func ResetSbfmVerifiedBots()
```

##### `ResetSuppressSessionScore` <a name="ResetSuppressSessionScore" id="@cdktf/provider-cloudflare.botManagement.BotManagement.resetSuppressSessionScore"></a>

```go
func ResetSuppressSessionScore()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagement.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagement.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagement.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagement.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a BotManagement resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-cloudflare.botManagement.BotManagement.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/botmanagement"

botmanagement.BotManagement_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.botManagement.BotManagement.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-cloudflare.botManagement.BotManagement.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/botmanagement"

botmanagement.BotManagement_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.botManagement.BotManagement.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-cloudflare.botManagement.BotManagement.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/botmanagement"

botmanagement.BotManagement_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.botManagement.BotManagement.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-cloudflare.botManagement.BotManagement.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/botmanagement"

botmanagement.BotManagement_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a BotManagement resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.botManagement.BotManagement.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.botManagement.BotManagement.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the BotManagement to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.botManagement.BotManagement.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing BotManagement that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.25.0/docs/resources/bot_management#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.botManagement.BotManagement.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the BotManagement to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagement.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagement.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagement.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagement.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagement.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagement.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagement.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagement.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagement.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagement.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagement.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagement.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagement.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagement.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagement.property.usingLatestModel">UsingLatestModel</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagement.property.autoUpdateModelInput">AutoUpdateModelInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagement.property.enableJsInput">EnableJsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagement.property.fightModeInput">FightModeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagement.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagement.property.optimizeWordpressInput">OptimizeWordpressInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagement.property.sbfmDefinitelyAutomatedInput">SbfmDefinitelyAutomatedInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagement.property.sbfmLikelyAutomatedInput">SbfmLikelyAutomatedInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagement.property.sbfmStaticResourceProtectionInput">SbfmStaticResourceProtectionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagement.property.sbfmVerifiedBotsInput">SbfmVerifiedBotsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagement.property.suppressSessionScoreInput">SuppressSessionScoreInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagement.property.zoneIdInput">ZoneIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagement.property.autoUpdateModel">AutoUpdateModel</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagement.property.enableJs">EnableJs</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagement.property.fightMode">FightMode</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagement.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagement.property.optimizeWordpress">OptimizeWordpress</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagement.property.sbfmDefinitelyAutomated">SbfmDefinitelyAutomated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagement.property.sbfmLikelyAutomated">SbfmLikelyAutomated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagement.property.sbfmStaticResourceProtection">SbfmStaticResourceProtection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagement.property.sbfmVerifiedBots">SbfmVerifiedBots</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagement.property.suppressSessionScore">SuppressSessionScore</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagement.property.zoneId">ZoneId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-cloudflare.botManagement.BotManagement.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-cloudflare.botManagement.BotManagement.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.botManagement.BotManagement.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-cloudflare.botManagement.BotManagement.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-cloudflare.botManagement.BotManagement.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-cloudflare.botManagement.BotManagement.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-cloudflare.botManagement.BotManagement.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.botManagement.BotManagement.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.botManagement.BotManagement.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.botManagement.BotManagement.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.botManagement.BotManagement.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.botManagement.BotManagement.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.botManagement.BotManagement.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.botManagement.BotManagement.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `UsingLatestModel`<sup>Required</sup> <a name="UsingLatestModel" id="@cdktf/provider-cloudflare.botManagement.BotManagement.property.usingLatestModel"></a>

```go
func UsingLatestModel() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `AutoUpdateModelInput`<sup>Optional</sup> <a name="AutoUpdateModelInput" id="@cdktf/provider-cloudflare.botManagement.BotManagement.property.autoUpdateModelInput"></a>

```go
func AutoUpdateModelInput() interface{}
```

- *Type:* interface{}

---

##### `EnableJsInput`<sup>Optional</sup> <a name="EnableJsInput" id="@cdktf/provider-cloudflare.botManagement.BotManagement.property.enableJsInput"></a>

```go
func EnableJsInput() interface{}
```

- *Type:* interface{}

---

##### `FightModeInput`<sup>Optional</sup> <a name="FightModeInput" id="@cdktf/provider-cloudflare.botManagement.BotManagement.property.fightModeInput"></a>

```go
func FightModeInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-cloudflare.botManagement.BotManagement.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `OptimizeWordpressInput`<sup>Optional</sup> <a name="OptimizeWordpressInput" id="@cdktf/provider-cloudflare.botManagement.BotManagement.property.optimizeWordpressInput"></a>

```go
func OptimizeWordpressInput() interface{}
```

- *Type:* interface{}

---

##### `SbfmDefinitelyAutomatedInput`<sup>Optional</sup> <a name="SbfmDefinitelyAutomatedInput" id="@cdktf/provider-cloudflare.botManagement.BotManagement.property.sbfmDefinitelyAutomatedInput"></a>

```go
func SbfmDefinitelyAutomatedInput() *string
```

- *Type:* *string

---

##### `SbfmLikelyAutomatedInput`<sup>Optional</sup> <a name="SbfmLikelyAutomatedInput" id="@cdktf/provider-cloudflare.botManagement.BotManagement.property.sbfmLikelyAutomatedInput"></a>

```go
func SbfmLikelyAutomatedInput() *string
```

- *Type:* *string

---

##### `SbfmStaticResourceProtectionInput`<sup>Optional</sup> <a name="SbfmStaticResourceProtectionInput" id="@cdktf/provider-cloudflare.botManagement.BotManagement.property.sbfmStaticResourceProtectionInput"></a>

```go
func SbfmStaticResourceProtectionInput() interface{}
```

- *Type:* interface{}

---

##### `SbfmVerifiedBotsInput`<sup>Optional</sup> <a name="SbfmVerifiedBotsInput" id="@cdktf/provider-cloudflare.botManagement.BotManagement.property.sbfmVerifiedBotsInput"></a>

```go
func SbfmVerifiedBotsInput() *string
```

- *Type:* *string

---

##### `SuppressSessionScoreInput`<sup>Optional</sup> <a name="SuppressSessionScoreInput" id="@cdktf/provider-cloudflare.botManagement.BotManagement.property.suppressSessionScoreInput"></a>

```go
func SuppressSessionScoreInput() interface{}
```

- *Type:* interface{}

---

##### `ZoneIdInput`<sup>Optional</sup> <a name="ZoneIdInput" id="@cdktf/provider-cloudflare.botManagement.BotManagement.property.zoneIdInput"></a>

```go
func ZoneIdInput() *string
```

- *Type:* *string

---

##### `AutoUpdateModel`<sup>Required</sup> <a name="AutoUpdateModel" id="@cdktf/provider-cloudflare.botManagement.BotManagement.property.autoUpdateModel"></a>

```go
func AutoUpdateModel() interface{}
```

- *Type:* interface{}

---

##### `EnableJs`<sup>Required</sup> <a name="EnableJs" id="@cdktf/provider-cloudflare.botManagement.BotManagement.property.enableJs"></a>

```go
func EnableJs() interface{}
```

- *Type:* interface{}

---

##### `FightMode`<sup>Required</sup> <a name="FightMode" id="@cdktf/provider-cloudflare.botManagement.BotManagement.property.fightMode"></a>

```go
func FightMode() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.botManagement.BotManagement.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `OptimizeWordpress`<sup>Required</sup> <a name="OptimizeWordpress" id="@cdktf/provider-cloudflare.botManagement.BotManagement.property.optimizeWordpress"></a>

```go
func OptimizeWordpress() interface{}
```

- *Type:* interface{}

---

##### `SbfmDefinitelyAutomated`<sup>Required</sup> <a name="SbfmDefinitelyAutomated" id="@cdktf/provider-cloudflare.botManagement.BotManagement.property.sbfmDefinitelyAutomated"></a>

```go
func SbfmDefinitelyAutomated() *string
```

- *Type:* *string

---

##### `SbfmLikelyAutomated`<sup>Required</sup> <a name="SbfmLikelyAutomated" id="@cdktf/provider-cloudflare.botManagement.BotManagement.property.sbfmLikelyAutomated"></a>

```go
func SbfmLikelyAutomated() *string
```

- *Type:* *string

---

##### `SbfmStaticResourceProtection`<sup>Required</sup> <a name="SbfmStaticResourceProtection" id="@cdktf/provider-cloudflare.botManagement.BotManagement.property.sbfmStaticResourceProtection"></a>

```go
func SbfmStaticResourceProtection() interface{}
```

- *Type:* interface{}

---

##### `SbfmVerifiedBots`<sup>Required</sup> <a name="SbfmVerifiedBots" id="@cdktf/provider-cloudflare.botManagement.BotManagement.property.sbfmVerifiedBots"></a>

```go
func SbfmVerifiedBots() *string
```

- *Type:* *string

---

##### `SuppressSessionScore`<sup>Required</sup> <a name="SuppressSessionScore" id="@cdktf/provider-cloudflare.botManagement.BotManagement.property.suppressSessionScore"></a>

```go
func SuppressSessionScore() interface{}
```

- *Type:* interface{}

---

##### `ZoneId`<sup>Required</sup> <a name="ZoneId" id="@cdktf/provider-cloudflare.botManagement.BotManagement.property.zoneId"></a>

```go
func ZoneId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagement.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-cloudflare.botManagement.BotManagement.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### BotManagementConfig <a name="BotManagementConfig" id="@cdktf/provider-cloudflare.botManagement.BotManagementConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.botManagement.BotManagementConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/botmanagement"

&botmanagement.BotManagementConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ZoneId: *string,
	AutoUpdateModel: interface{},
	EnableJs: interface{},
	FightMode: interface{},
	Id: *string,
	OptimizeWordpress: interface{},
	SbfmDefinitelyAutomated: *string,
	SbfmLikelyAutomated: *string,
	SbfmStaticResourceProtection: interface{},
	SbfmVerifiedBots: *string,
	SuppressSessionScore: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagementConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagementConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagementConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagementConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagementConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagementConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagementConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagementConfig.property.zoneId">ZoneId</a></code> | <code>*string</code> | The zone identifier to target for the resource. **Modifying this attribute will force creation of a new resource.**. |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagementConfig.property.autoUpdateModel">AutoUpdateModel</a></code> | <code>interface{}</code> | Automatically update to the newest bot detection models created by Cloudflare as they are released. [Learn more.](https://developers.cloudflare.com/bots/reference/machine-learning-models#model-versions-and-release-notes). |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagementConfig.property.enableJs">EnableJs</a></code> | <code>interface{}</code> | Use lightweight, invisible JavaScript detections to improve Bot Management. [Learn more about JavaScript Detections](https://developers.cloudflare.com/bots/reference/javascript-detections/). |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagementConfig.property.fightMode">FightMode</a></code> | <code>interface{}</code> | Whether to enable Bot Fight Mode. |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagementConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.25.0/docs/resources/bot_management#id BotManagement#id}. |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagementConfig.property.optimizeWordpress">OptimizeWordpress</a></code> | <code>interface{}</code> | Whether to optimize Super Bot Fight Mode protections for Wordpress. |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagementConfig.property.sbfmDefinitelyAutomated">SbfmDefinitelyAutomated</a></code> | <code>*string</code> | Super Bot Fight Mode (SBFM) action to take on definitely automated requests. |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagementConfig.property.sbfmLikelyAutomated">SbfmLikelyAutomated</a></code> | <code>*string</code> | Super Bot Fight Mode (SBFM) action to take on likely automated requests. |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagementConfig.property.sbfmStaticResourceProtection">SbfmStaticResourceProtection</a></code> | <code>interface{}</code> | Super Bot Fight Mode (SBFM) to enable static resource protection. |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagementConfig.property.sbfmVerifiedBots">SbfmVerifiedBots</a></code> | <code>*string</code> | Super Bot Fight Mode (SBFM) action to take on verified bots requests. |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagementConfig.property.suppressSessionScore">SuppressSessionScore</a></code> | <code>interface{}</code> | Whether to disable tracking the highest bot score for a session in the Bot Management cookie. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.botManagement.BotManagementConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.botManagement.BotManagementConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.botManagement.BotManagementConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.botManagement.BotManagementConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.botManagement.BotManagementConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.botManagement.BotManagementConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.botManagement.BotManagementConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ZoneId`<sup>Required</sup> <a name="ZoneId" id="@cdktf/provider-cloudflare.botManagement.BotManagementConfig.property.zoneId"></a>

```go
ZoneId *string
```

- *Type:* *string

The zone identifier to target for the resource. **Modifying this attribute will force creation of a new resource.**.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.25.0/docs/resources/bot_management#zone_id BotManagement#zone_id}

---

##### `AutoUpdateModel`<sup>Optional</sup> <a name="AutoUpdateModel" id="@cdktf/provider-cloudflare.botManagement.BotManagementConfig.property.autoUpdateModel"></a>

```go
AutoUpdateModel interface{}
```

- *Type:* interface{}

Automatically update to the newest bot detection models created by Cloudflare as they are released. [Learn more.](https://developers.cloudflare.com/bots/reference/machine-learning-models#model-versions-and-release-notes).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.25.0/docs/resources/bot_management#auto_update_model BotManagement#auto_update_model}

---

##### `EnableJs`<sup>Optional</sup> <a name="EnableJs" id="@cdktf/provider-cloudflare.botManagement.BotManagementConfig.property.enableJs"></a>

```go
EnableJs interface{}
```

- *Type:* interface{}

Use lightweight, invisible JavaScript detections to improve Bot Management. [Learn more about JavaScript Detections](https://developers.cloudflare.com/bots/reference/javascript-detections/).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.25.0/docs/resources/bot_management#enable_js BotManagement#enable_js}

---

##### `FightMode`<sup>Optional</sup> <a name="FightMode" id="@cdktf/provider-cloudflare.botManagement.BotManagementConfig.property.fightMode"></a>

```go
FightMode interface{}
```

- *Type:* interface{}

Whether to enable Bot Fight Mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.25.0/docs/resources/bot_management#fight_mode BotManagement#fight_mode}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-cloudflare.botManagement.BotManagementConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.25.0/docs/resources/bot_management#id BotManagement#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `OptimizeWordpress`<sup>Optional</sup> <a name="OptimizeWordpress" id="@cdktf/provider-cloudflare.botManagement.BotManagementConfig.property.optimizeWordpress"></a>

```go
OptimizeWordpress interface{}
```

- *Type:* interface{}

Whether to optimize Super Bot Fight Mode protections for Wordpress.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.25.0/docs/resources/bot_management#optimize_wordpress BotManagement#optimize_wordpress}

---

##### `SbfmDefinitelyAutomated`<sup>Optional</sup> <a name="SbfmDefinitelyAutomated" id="@cdktf/provider-cloudflare.botManagement.BotManagementConfig.property.sbfmDefinitelyAutomated"></a>

```go
SbfmDefinitelyAutomated *string
```

- *Type:* *string

Super Bot Fight Mode (SBFM) action to take on definitely automated requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.25.0/docs/resources/bot_management#sbfm_definitely_automated BotManagement#sbfm_definitely_automated}

---

##### `SbfmLikelyAutomated`<sup>Optional</sup> <a name="SbfmLikelyAutomated" id="@cdktf/provider-cloudflare.botManagement.BotManagementConfig.property.sbfmLikelyAutomated"></a>

```go
SbfmLikelyAutomated *string
```

- *Type:* *string

Super Bot Fight Mode (SBFM) action to take on likely automated requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.25.0/docs/resources/bot_management#sbfm_likely_automated BotManagement#sbfm_likely_automated}

---

##### `SbfmStaticResourceProtection`<sup>Optional</sup> <a name="SbfmStaticResourceProtection" id="@cdktf/provider-cloudflare.botManagement.BotManagementConfig.property.sbfmStaticResourceProtection"></a>

```go
SbfmStaticResourceProtection interface{}
```

- *Type:* interface{}

Super Bot Fight Mode (SBFM) to enable static resource protection.

Enable if static resources on your application need bot protection. Note: Static resource protection can also result in legitimate traffic being blocked.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.25.0/docs/resources/bot_management#sbfm_static_resource_protection BotManagement#sbfm_static_resource_protection}

---

##### `SbfmVerifiedBots`<sup>Optional</sup> <a name="SbfmVerifiedBots" id="@cdktf/provider-cloudflare.botManagement.BotManagementConfig.property.sbfmVerifiedBots"></a>

```go
SbfmVerifiedBots *string
```

- *Type:* *string

Super Bot Fight Mode (SBFM) action to take on verified bots requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.25.0/docs/resources/bot_management#sbfm_verified_bots BotManagement#sbfm_verified_bots}

---

##### `SuppressSessionScore`<sup>Optional</sup> <a name="SuppressSessionScore" id="@cdktf/provider-cloudflare.botManagement.BotManagementConfig.property.suppressSessionScore"></a>

```go
SuppressSessionScore interface{}
```

- *Type:* interface{}

Whether to disable tracking the highest bot score for a session in the Bot Management cookie.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.25.0/docs/resources/bot_management#suppress_session_score BotManagement#suppress_session_score}

---



