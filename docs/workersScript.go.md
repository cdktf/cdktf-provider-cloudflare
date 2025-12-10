# `workersScript` Submodule <a name="`workersScript` Submodule" id="@cdktf/provider-cloudflare.workersScript"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WorkersScript <a name="WorkersScript" id="@cdktf/provider-cloudflare.workersScript.WorkersScript"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/workers_script cloudflare_workers_script}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/workersscript"

workersscript.NewWorkersScript(scope Construct, id *string, config WorkersScriptConfig) WorkersScript
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptConfig">WorkersScriptConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptConfig">WorkersScriptConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.putAssets">PutAssets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.putBindings">PutBindings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.putLimits">PutLimits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.putMigrations">PutMigrations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.putObservability">PutObservability</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.putPlacement">PutPlacement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.putTailConsumers">PutTailConsumers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.resetAssets">ResetAssets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.resetBindings">ResetBindings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.resetBodyPart">ResetBodyPart</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.resetCompatibilityDate">ResetCompatibilityDate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.resetCompatibilityFlags">ResetCompatibilityFlags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.resetContent">ResetContent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.resetContentFile">ResetContentFile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.resetContentSha256">ResetContentSha256</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.resetContentType">ResetContentType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.resetKeepAssets">ResetKeepAssets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.resetKeepBindings">ResetKeepBindings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.resetLimits">ResetLimits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.resetLogpush">ResetLogpush</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.resetMainModule">ResetMainModule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.resetMigrations">ResetMigrations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.resetObservability">ResetObservability</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.resetPlacement">ResetPlacement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.resetTailConsumers">ResetTailConsumers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.resetUsageModel">ResetUsageModel</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAssets` <a name="PutAssets" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.putAssets"></a>

```go
func PutAssets(value WorkersScriptAssets)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.putAssets.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssets">WorkersScriptAssets</a>

---

##### `PutBindings` <a name="PutBindings" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.putBindings"></a>

```go
func PutBindings(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.putBindings.parameter.value"></a>

- *Type:* interface{}

---

##### `PutLimits` <a name="PutLimits" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.putLimits"></a>

```go
func PutLimits(value WorkersScriptLimits)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.putLimits.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptLimits">WorkersScriptLimits</a>

---

##### `PutMigrations` <a name="PutMigrations" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.putMigrations"></a>

```go
func PutMigrations(value WorkersScriptMigrations)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.putMigrations.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrations">WorkersScriptMigrations</a>

---

##### `PutObservability` <a name="PutObservability" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.putObservability"></a>

```go
func PutObservability(value WorkersScriptObservability)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.putObservability.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptObservability">WorkersScriptObservability</a>

---

##### `PutPlacement` <a name="PutPlacement" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.putPlacement"></a>

```go
func PutPlacement(value WorkersScriptPlacement)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.putPlacement.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacement">WorkersScriptPlacement</a>

---

##### `PutTailConsumers` <a name="PutTailConsumers" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.putTailConsumers"></a>

```go
func PutTailConsumers(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.putTailConsumers.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAssets` <a name="ResetAssets" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.resetAssets"></a>

```go
func ResetAssets()
```

##### `ResetBindings` <a name="ResetBindings" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.resetBindings"></a>

```go
func ResetBindings()
```

##### `ResetBodyPart` <a name="ResetBodyPart" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.resetBodyPart"></a>

```go
func ResetBodyPart()
```

##### `ResetCompatibilityDate` <a name="ResetCompatibilityDate" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.resetCompatibilityDate"></a>

```go
func ResetCompatibilityDate()
```

##### `ResetCompatibilityFlags` <a name="ResetCompatibilityFlags" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.resetCompatibilityFlags"></a>

```go
func ResetCompatibilityFlags()
```

##### `ResetContent` <a name="ResetContent" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.resetContent"></a>

```go
func ResetContent()
```

##### `ResetContentFile` <a name="ResetContentFile" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.resetContentFile"></a>

```go
func ResetContentFile()
```

##### `ResetContentSha256` <a name="ResetContentSha256" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.resetContentSha256"></a>

```go
func ResetContentSha256()
```

##### `ResetContentType` <a name="ResetContentType" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.resetContentType"></a>

```go
func ResetContentType()
```

##### `ResetKeepAssets` <a name="ResetKeepAssets" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.resetKeepAssets"></a>

```go
func ResetKeepAssets()
```

##### `ResetKeepBindings` <a name="ResetKeepBindings" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.resetKeepBindings"></a>

```go
func ResetKeepBindings()
```

##### `ResetLimits` <a name="ResetLimits" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.resetLimits"></a>

```go
func ResetLimits()
```

##### `ResetLogpush` <a name="ResetLogpush" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.resetLogpush"></a>

```go
func ResetLogpush()
```

##### `ResetMainModule` <a name="ResetMainModule" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.resetMainModule"></a>

```go
func ResetMainModule()
```

##### `ResetMigrations` <a name="ResetMigrations" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.resetMigrations"></a>

```go
func ResetMigrations()
```

##### `ResetObservability` <a name="ResetObservability" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.resetObservability"></a>

```go
func ResetObservability()
```

##### `ResetPlacement` <a name="ResetPlacement" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.resetPlacement"></a>

```go
func ResetPlacement()
```

##### `ResetTailConsumers` <a name="ResetTailConsumers" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.resetTailConsumers"></a>

```go
func ResetTailConsumers()
```

##### `ResetUsageModel` <a name="ResetUsageModel" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.resetUsageModel"></a>

```go
func ResetUsageModel()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a WorkersScript resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/workersscript"

workersscript.WorkersScript_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/workersscript"

workersscript.WorkersScript_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/workersscript"

workersscript.WorkersScript_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/workersscript"

workersscript.WorkersScript_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a WorkersScript resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the WorkersScript to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing WorkersScript that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/workers_script#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the WorkersScript to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.property.assets">Assets</a></code> | <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference">WorkersScriptAssetsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.property.bindings">Bindings</a></code> | <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsList">WorkersScriptBindingsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.property.createdOn">CreatedOn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.property.etag">Etag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.property.handlers">Handlers</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.property.hasAssets">HasAssets</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.property.hasModules">HasModules</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.property.lastDeployedFrom">LastDeployedFrom</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.property.limits">Limits</a></code> | <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptLimitsOutputReference">WorkersScriptLimitsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.property.migrations">Migrations</a></code> | <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference">WorkersScriptMigrationsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.property.migrationTag">MigrationTag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.property.modifiedOn">ModifiedOn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.property.namedHandlers">NamedHandlers</a></code> | <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptNamedHandlersList">WorkersScriptNamedHandlersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.property.observability">Observability</a></code> | <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference">WorkersScriptObservabilityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.property.placement">Placement</a></code> | <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacementOutputReference">WorkersScriptPlacementOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.property.startupTimeMs">StartupTimeMs</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.property.tailConsumers">TailConsumers</a></code> | <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersList">WorkersScriptTailConsumersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.property.accountIdInput">AccountIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.property.assetsInput">AssetsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.property.bindingsInput">BindingsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.property.bodyPartInput">BodyPartInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.property.compatibilityDateInput">CompatibilityDateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.property.compatibilityFlagsInput">CompatibilityFlagsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.property.contentFileInput">ContentFileInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.property.contentInput">ContentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.property.contentSha256Input">ContentSha256Input</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.property.contentTypeInput">ContentTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.property.keepAssetsInput">KeepAssetsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.property.keepBindingsInput">KeepBindingsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.property.limitsInput">LimitsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.property.logpushInput">LogpushInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.property.mainModuleInput">MainModuleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.property.migrationsInput">MigrationsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.property.observabilityInput">ObservabilityInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.property.placementInput">PlacementInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.property.scriptNameInput">ScriptNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.property.tailConsumersInput">TailConsumersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.property.usageModelInput">UsageModelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.property.accountId">AccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.property.bodyPart">BodyPart</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.property.compatibilityDate">CompatibilityDate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.property.compatibilityFlags">CompatibilityFlags</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.property.content">Content</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.property.contentFile">ContentFile</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.property.contentSha256">ContentSha256</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.property.contentType">ContentType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.property.keepAssets">KeepAssets</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.property.keepBindings">KeepBindings</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.property.logpush">Logpush</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.property.mainModule">MainModule</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.property.scriptName">ScriptName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.property.usageModel">UsageModel</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Assets`<sup>Required</sup> <a name="Assets" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.property.assets"></a>

```go
func Assets() WorkersScriptAssetsOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference">WorkersScriptAssetsOutputReference</a>

---

##### `Bindings`<sup>Required</sup> <a name="Bindings" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.property.bindings"></a>

```go
func Bindings() WorkersScriptBindingsList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsList">WorkersScriptBindingsList</a>

---

##### `CreatedOn`<sup>Required</sup> <a name="CreatedOn" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.property.createdOn"></a>

```go
func CreatedOn() *string
```

- *Type:* *string

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.property.etag"></a>

```go
func Etag() *string
```

- *Type:* *string

---

##### `Handlers`<sup>Required</sup> <a name="Handlers" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.property.handlers"></a>

```go
func Handlers() *[]*string
```

- *Type:* *[]*string

---

##### `HasAssets`<sup>Required</sup> <a name="HasAssets" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.property.hasAssets"></a>

```go
func HasAssets() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `HasModules`<sup>Required</sup> <a name="HasModules" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.property.hasModules"></a>

```go
func HasModules() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LastDeployedFrom`<sup>Required</sup> <a name="LastDeployedFrom" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.property.lastDeployedFrom"></a>

```go
func LastDeployedFrom() *string
```

- *Type:* *string

---

##### `Limits`<sup>Required</sup> <a name="Limits" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.property.limits"></a>

```go
func Limits() WorkersScriptLimitsOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptLimitsOutputReference">WorkersScriptLimitsOutputReference</a>

---

##### `Migrations`<sup>Required</sup> <a name="Migrations" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.property.migrations"></a>

```go
func Migrations() WorkersScriptMigrationsOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference">WorkersScriptMigrationsOutputReference</a>

---

##### `MigrationTag`<sup>Required</sup> <a name="MigrationTag" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.property.migrationTag"></a>

```go
func MigrationTag() *string
```

- *Type:* *string

---

##### `ModifiedOn`<sup>Required</sup> <a name="ModifiedOn" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.property.modifiedOn"></a>

```go
func ModifiedOn() *string
```

- *Type:* *string

---

##### `NamedHandlers`<sup>Required</sup> <a name="NamedHandlers" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.property.namedHandlers"></a>

```go
func NamedHandlers() WorkersScriptNamedHandlersList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptNamedHandlersList">WorkersScriptNamedHandlersList</a>

---

##### `Observability`<sup>Required</sup> <a name="Observability" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.property.observability"></a>

```go
func Observability() WorkersScriptObservabilityOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference">WorkersScriptObservabilityOutputReference</a>

---

##### `Placement`<sup>Required</sup> <a name="Placement" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.property.placement"></a>

```go
func Placement() WorkersScriptPlacementOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacementOutputReference">WorkersScriptPlacementOutputReference</a>

---

##### `StartupTimeMs`<sup>Required</sup> <a name="StartupTimeMs" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.property.startupTimeMs"></a>

```go
func StartupTimeMs() *f64
```

- *Type:* *f64

---

##### `TailConsumers`<sup>Required</sup> <a name="TailConsumers" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.property.tailConsumers"></a>

```go
func TailConsumers() WorkersScriptTailConsumersList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersList">WorkersScriptTailConsumersList</a>

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.property.accountIdInput"></a>

```go
func AccountIdInput() *string
```

- *Type:* *string

---

##### `AssetsInput`<sup>Optional</sup> <a name="AssetsInput" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.property.assetsInput"></a>

```go
func AssetsInput() interface{}
```

- *Type:* interface{}

---

##### `BindingsInput`<sup>Optional</sup> <a name="BindingsInput" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.property.bindingsInput"></a>

```go
func BindingsInput() interface{}
```

- *Type:* interface{}

---

##### `BodyPartInput`<sup>Optional</sup> <a name="BodyPartInput" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.property.bodyPartInput"></a>

```go
func BodyPartInput() *string
```

- *Type:* *string

---

##### `CompatibilityDateInput`<sup>Optional</sup> <a name="CompatibilityDateInput" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.property.compatibilityDateInput"></a>

```go
func CompatibilityDateInput() *string
```

- *Type:* *string

---

##### `CompatibilityFlagsInput`<sup>Optional</sup> <a name="CompatibilityFlagsInput" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.property.compatibilityFlagsInput"></a>

```go
func CompatibilityFlagsInput() *[]*string
```

- *Type:* *[]*string

---

##### `ContentFileInput`<sup>Optional</sup> <a name="ContentFileInput" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.property.contentFileInput"></a>

```go
func ContentFileInput() *string
```

- *Type:* *string

---

##### `ContentInput`<sup>Optional</sup> <a name="ContentInput" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.property.contentInput"></a>

```go
func ContentInput() *string
```

- *Type:* *string

---

##### `ContentSha256Input`<sup>Optional</sup> <a name="ContentSha256Input" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.property.contentSha256Input"></a>

```go
func ContentSha256Input() *string
```

- *Type:* *string

---

##### `ContentTypeInput`<sup>Optional</sup> <a name="ContentTypeInput" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.property.contentTypeInput"></a>

```go
func ContentTypeInput() *string
```

- *Type:* *string

---

##### `KeepAssetsInput`<sup>Optional</sup> <a name="KeepAssetsInput" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.property.keepAssetsInput"></a>

```go
func KeepAssetsInput() interface{}
```

- *Type:* interface{}

---

##### `KeepBindingsInput`<sup>Optional</sup> <a name="KeepBindingsInput" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.property.keepBindingsInput"></a>

```go
func KeepBindingsInput() *[]*string
```

- *Type:* *[]*string

---

##### `LimitsInput`<sup>Optional</sup> <a name="LimitsInput" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.property.limitsInput"></a>

```go
func LimitsInput() interface{}
```

- *Type:* interface{}

---

##### `LogpushInput`<sup>Optional</sup> <a name="LogpushInput" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.property.logpushInput"></a>

```go
func LogpushInput() interface{}
```

- *Type:* interface{}

---

##### `MainModuleInput`<sup>Optional</sup> <a name="MainModuleInput" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.property.mainModuleInput"></a>

```go
func MainModuleInput() *string
```

- *Type:* *string

---

##### `MigrationsInput`<sup>Optional</sup> <a name="MigrationsInput" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.property.migrationsInput"></a>

```go
func MigrationsInput() interface{}
```

- *Type:* interface{}

---

##### `ObservabilityInput`<sup>Optional</sup> <a name="ObservabilityInput" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.property.observabilityInput"></a>

```go
func ObservabilityInput() interface{}
```

- *Type:* interface{}

---

##### `PlacementInput`<sup>Optional</sup> <a name="PlacementInput" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.property.placementInput"></a>

```go
func PlacementInput() interface{}
```

- *Type:* interface{}

---

##### `ScriptNameInput`<sup>Optional</sup> <a name="ScriptNameInput" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.property.scriptNameInput"></a>

```go
func ScriptNameInput() *string
```

- *Type:* *string

---

##### `TailConsumersInput`<sup>Optional</sup> <a name="TailConsumersInput" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.property.tailConsumersInput"></a>

```go
func TailConsumersInput() interface{}
```

- *Type:* interface{}

---

##### `UsageModelInput`<sup>Optional</sup> <a name="UsageModelInput" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.property.usageModelInput"></a>

```go
func UsageModelInput() *string
```

- *Type:* *string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.property.accountId"></a>

```go
func AccountId() *string
```

- *Type:* *string

---

##### `BodyPart`<sup>Required</sup> <a name="BodyPart" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.property.bodyPart"></a>

```go
func BodyPart() *string
```

- *Type:* *string

---

##### `CompatibilityDate`<sup>Required</sup> <a name="CompatibilityDate" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.property.compatibilityDate"></a>

```go
func CompatibilityDate() *string
```

- *Type:* *string

---

##### `CompatibilityFlags`<sup>Required</sup> <a name="CompatibilityFlags" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.property.compatibilityFlags"></a>

```go
func CompatibilityFlags() *[]*string
```

- *Type:* *[]*string

---

##### `Content`<sup>Required</sup> <a name="Content" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.property.content"></a>

```go
func Content() *string
```

- *Type:* *string

---

##### `ContentFile`<sup>Required</sup> <a name="ContentFile" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.property.contentFile"></a>

```go
func ContentFile() *string
```

- *Type:* *string

---

##### `ContentSha256`<sup>Required</sup> <a name="ContentSha256" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.property.contentSha256"></a>

```go
func ContentSha256() *string
```

- *Type:* *string

---

##### `ContentType`<sup>Required</sup> <a name="ContentType" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.property.contentType"></a>

```go
func ContentType() *string
```

- *Type:* *string

---

##### `KeepAssets`<sup>Required</sup> <a name="KeepAssets" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.property.keepAssets"></a>

```go
func KeepAssets() interface{}
```

- *Type:* interface{}

---

##### `KeepBindings`<sup>Required</sup> <a name="KeepBindings" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.property.keepBindings"></a>

```go
func KeepBindings() *[]*string
```

- *Type:* *[]*string

---

##### `Logpush`<sup>Required</sup> <a name="Logpush" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.property.logpush"></a>

```go
func Logpush() interface{}
```

- *Type:* interface{}

---

##### `MainModule`<sup>Required</sup> <a name="MainModule" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.property.mainModule"></a>

```go
func MainModule() *string
```

- *Type:* *string

---

##### `ScriptName`<sup>Required</sup> <a name="ScriptName" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.property.scriptName"></a>

```go
func ScriptName() *string
```

- *Type:* *string

---

##### `UsageModel`<sup>Required</sup> <a name="UsageModel" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.property.usageModel"></a>

```go
func UsageModel() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### WorkersScriptAssets <a name="WorkersScriptAssets" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssets"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssets.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/workersscript"

&workersscript.WorkersScriptAssets {
	Config: github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare.workersScript.WorkersScriptAssetsConfig,
	Directory: *string,
	Jwt: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssets.property.config">Config</a></code> | <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfig">WorkersScriptAssetsConfig</a></code> | Configuration for assets within a Worker. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssets.property.directory">Directory</a></code> | <code>*string</code> | Path to the directory containing asset files to upload. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssets.property.jwt">Jwt</a></code> | <code>*string</code> | Token provided upon successful upload of all files from a registered manifest. |

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssets.property.config"></a>

```go
Config WorkersScriptAssetsConfig
```

- *Type:* <a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfig">WorkersScriptAssetsConfig</a>

Configuration for assets within a Worker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/workers_script#config WorkersScript#config}

---

##### `Directory`<sup>Optional</sup> <a name="Directory" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssets.property.directory"></a>

```go
Directory *string
```

- *Type:* *string

Path to the directory containing asset files to upload.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/workers_script#directory WorkersScript#directory}

---

##### `Jwt`<sup>Optional</sup> <a name="Jwt" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssets.property.jwt"></a>

```go
Jwt *string
```

- *Type:* *string

Token provided upon successful upload of all files from a registered manifest.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/workers_script#jwt WorkersScript#jwt}

---

### WorkersScriptAssetsConfig <a name="WorkersScriptAssetsConfig" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/workersscript"

&workersscript.WorkersScriptAssetsConfig {
	Headers: *string,
	HtmlHandling: *string,
	NotFoundHandling: *string,
	Redirects: *string,
	RunWorkerFirst: *map[string]interface{},
	ServeDirectly: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfig.property.headers">Headers</a></code> | <code>*string</code> | The contents of a _headers file (used to attach custom headers on asset responses). |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfig.property.htmlHandling">HtmlHandling</a></code> | <code>*string</code> | Determines the redirects and rewrites of requests for HTML content. Available values: "auto-trailing-slash", "force-trailing-slash", "drop-trailing-slash", "none". |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfig.property.notFoundHandling">NotFoundHandling</a></code> | <code>*string</code> | Determines the response when a request does not match a static asset, and there is no Worker script. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfig.property.redirects">Redirects</a></code> | <code>*string</code> | The contents of a _redirects file (used to apply redirects or proxy paths ahead of asset serving). |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfig.property.runWorkerFirst">RunWorkerFirst</a></code> | <code>*map[string]interface{}</code> | When a boolean true, requests will always invoke the Worker script. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfig.property.serveDirectly">ServeDirectly</a></code> | <code>interface{}</code> | When true and the incoming request matches an asset, that will be served instead of invoking the Worker script. |

---

##### `Headers`<sup>Optional</sup> <a name="Headers" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfig.property.headers"></a>

```go
Headers *string
```

- *Type:* *string

The contents of a _headers file (used to attach custom headers on asset responses).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/workers_script#headers WorkersScript#headers}

---

##### `HtmlHandling`<sup>Optional</sup> <a name="HtmlHandling" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfig.property.htmlHandling"></a>

```go
HtmlHandling *string
```

- *Type:* *string

Determines the redirects and rewrites of requests for HTML content. Available values: "auto-trailing-slash", "force-trailing-slash", "drop-trailing-slash", "none".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/workers_script#html_handling WorkersScript#html_handling}

---

##### `NotFoundHandling`<sup>Optional</sup> <a name="NotFoundHandling" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfig.property.notFoundHandling"></a>

```go
NotFoundHandling *string
```

- *Type:* *string

Determines the response when a request does not match a static asset, and there is no Worker script.

Available values: "none", "404-page", "single-page-application".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/workers_script#not_found_handling WorkersScript#not_found_handling}

---

##### `Redirects`<sup>Optional</sup> <a name="Redirects" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfig.property.redirects"></a>

```go
Redirects *string
```

- *Type:* *string

The contents of a _redirects file (used to apply redirects or proxy paths ahead of asset serving).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/workers_script#redirects WorkersScript#redirects}

---

##### `RunWorkerFirst`<sup>Optional</sup> <a name="RunWorkerFirst" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfig.property.runWorkerFirst"></a>

```go
RunWorkerFirst *map[string]interface{}
```

- *Type:* *map[string]interface{}

When a boolean true, requests will always invoke the Worker script.

Otherwise, attempt to serve an asset matching the request, falling back to the Worker script. When a list of strings, contains path rules to control routing to either the Worker or assets. Glob (*) and negative (!) rules are supported. Rules must start with either '/' or '!/'. At least one non-negative rule must be provided, and negative rules have higher precedence than non-negative rules.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/workers_script#run_worker_first WorkersScript#run_worker_first}

---

##### `ServeDirectly`<sup>Optional</sup> <a name="ServeDirectly" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfig.property.serveDirectly"></a>

```go
ServeDirectly interface{}
```

- *Type:* interface{}

When true and the incoming request matches an asset, that will be served instead of invoking the Worker script.

When false, requests will always invoke the Worker script.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/workers_script#serve_directly WorkersScript#serve_directly}

---

### WorkersScriptBindings <a name="WorkersScriptBindings" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindings.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/workersscript"

&workersscript.WorkersScriptBindings {
	Name: *string,
	Type: *string,
	Algorithm: *string,
	AllowedDestinationAddresses: *[]*string,
	AllowedSenderAddresses: *[]*string,
	BucketName: *string,
	CertificateId: *string,
	ClassName: *string,
	Dataset: *string,
	DestinationAddress: *string,
	Environment: *string,
	Format: *string,
	Id: *string,
	IndexName: *string,
	Json: *string,
	Jurisdiction: *string,
	KeyBase64: *string,
	KeyJwk: *string,
	Namespace: *string,
	NamespaceId: *string,
	OldName: *string,
	Outbound: github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare.workersScript.WorkersScriptBindingsOutbound,
	Part: *string,
	Pipeline: *string,
	QueueName: *string,
	ScriptName: *string,
	SecretName: *string,
	Service: *string,
	StoreId: *string,
	Text: *string,
	Usages: *[]*string,
	VersionId: *string,
	WorkflowName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindings.property.name">Name</a></code> | <code>*string</code> | A JavaScript variable name for the binding. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindings.property.type">Type</a></code> | <code>*string</code> | The kind of resource that the binding provides. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindings.property.algorithm">Algorithm</a></code> | <code>*string</code> | Algorithm-specific key parameters. [Learn more](https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/importKey#algorithm). |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindings.property.allowedDestinationAddresses">AllowedDestinationAddresses</a></code> | <code>*[]*string</code> | List of allowed destination addresses. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindings.property.allowedSenderAddresses">AllowedSenderAddresses</a></code> | <code>*[]*string</code> | List of allowed sender addresses. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindings.property.bucketName">BucketName</a></code> | <code>*string</code> | R2 bucket to bind to. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindings.property.certificateId">CertificateId</a></code> | <code>*string</code> | Identifier of the certificate to bind to. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindings.property.className">ClassName</a></code> | <code>*string</code> | The exported class name of the Durable Object. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindings.property.dataset">Dataset</a></code> | <code>*string</code> | The name of the dataset to bind to. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindings.property.destinationAddress">DestinationAddress</a></code> | <code>*string</code> | Destination address for the email. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindings.property.environment">Environment</a></code> | <code>*string</code> | The environment of the script_name to bind to. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindings.property.format">Format</a></code> | <code>*string</code> | Data format of the key. [Learn more](https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/importKey#format). Available values: "raw", "pkcs8", "spki", "jwk". |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindings.property.id">Id</a></code> | <code>*string</code> | Identifier of the D1 database to bind to. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindings.property.indexName">IndexName</a></code> | <code>*string</code> | Name of the Vectorize index to bind to. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindings.property.json">Json</a></code> | <code>*string</code> | JSON data to use. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindings.property.jurisdiction">Jurisdiction</a></code> | <code>*string</code> | The [jurisdiction](https://developers.cloudflare.com/r2/reference/data-location/#jurisdictional-restrictions) of the R2 bucket. Available values: "eu", "fedramp". |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindings.property.keyBase64">KeyBase64</a></code> | <code>*string</code> | Base64-encoded key data. Required if `format` is "raw", "pkcs8", or "spki". |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindings.property.keyJwk">KeyJwk</a></code> | <code>*string</code> | Key data in [JSON Web Key](https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/importKey#json_web_key) format. Required if `format` is "jwk". |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindings.property.namespace">Namespace</a></code> | <code>*string</code> | The name of the dispatch namespace. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindings.property.namespaceId">NamespaceId</a></code> | <code>*string</code> | Namespace identifier tag. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindings.property.oldName">OldName</a></code> | <code>*string</code> | The old name of the inherited binding. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindings.property.outbound">Outbound</a></code> | <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutbound">WorkersScriptBindingsOutbound</a></code> | Outbound worker. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindings.property.part">Part</a></code> | <code>*string</code> | The name of the file containing the data content. Only accepted for `service worker syntax` Workers. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindings.property.pipeline">Pipeline</a></code> | <code>*string</code> | Name of the Pipeline to bind to. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindings.property.queueName">QueueName</a></code> | <code>*string</code> | Name of the Queue to bind to. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindings.property.scriptName">ScriptName</a></code> | <code>*string</code> | The script where the Durable Object is defined, if it is external to this Worker. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindings.property.secretName">SecretName</a></code> | <code>*string</code> | Name of the secret in the store. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindings.property.service">Service</a></code> | <code>*string</code> | Name of Worker to bind to. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindings.property.storeId">StoreId</a></code> | <code>*string</code> | ID of the store containing the secret. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindings.property.text">Text</a></code> | <code>*string</code> | The text value to use. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindings.property.usages">Usages</a></code> | <code>*[]*string</code> | Allowed operations with the key. [Learn more](https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/importKey#keyUsages). |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindings.property.versionId">VersionId</a></code> | <code>*string</code> | Identifier for the version to inherit the binding from, which can be the version ID or the literal "latest" to inherit from the latest version. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindings.property.workflowName">WorkflowName</a></code> | <code>*string</code> | Name of the Workflow to bind to. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindings.property.name"></a>

```go
Name *string
```

- *Type:* *string

A JavaScript variable name for the binding.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/workers_script#name WorkersScript#name}

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindings.property.type"></a>

```go
Type *string
```

- *Type:* *string

The kind of resource that the binding provides.

Available values: "ai", "analytics_engine", "assets", "browser", "d1", "data_blob", "dispatch_namespace", "durable_object_namespace", "hyperdrive", "inherit", "images", "json", "kv_namespace", "mtls_certificate", "plain_text", "pipelines", "queue", "r2_bucket", "secret_text", "send_email", "service", "tail_consumer", "text_blob", "vectorize", "version_metadata", "secrets_store_secret", "secret_key", "workflow", "wasm_module".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/workers_script#type WorkersScript#type}

---

##### `Algorithm`<sup>Optional</sup> <a name="Algorithm" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindings.property.algorithm"></a>

```go
Algorithm *string
```

- *Type:* *string

Algorithm-specific key parameters. [Learn more](https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/importKey#algorithm).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/workers_script#algorithm WorkersScript#algorithm}

---

##### `AllowedDestinationAddresses`<sup>Optional</sup> <a name="AllowedDestinationAddresses" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindings.property.allowedDestinationAddresses"></a>

```go
AllowedDestinationAddresses *[]*string
```

- *Type:* *[]*string

List of allowed destination addresses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/workers_script#allowed_destination_addresses WorkersScript#allowed_destination_addresses}

---

##### `AllowedSenderAddresses`<sup>Optional</sup> <a name="AllowedSenderAddresses" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindings.property.allowedSenderAddresses"></a>

```go
AllowedSenderAddresses *[]*string
```

- *Type:* *[]*string

List of allowed sender addresses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/workers_script#allowed_sender_addresses WorkersScript#allowed_sender_addresses}

---

##### `BucketName`<sup>Optional</sup> <a name="BucketName" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindings.property.bucketName"></a>

```go
BucketName *string
```

- *Type:* *string

R2 bucket to bind to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/workers_script#bucket_name WorkersScript#bucket_name}

---

##### `CertificateId`<sup>Optional</sup> <a name="CertificateId" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindings.property.certificateId"></a>

```go
CertificateId *string
```

- *Type:* *string

Identifier of the certificate to bind to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/workers_script#certificate_id WorkersScript#certificate_id}

---

##### `ClassName`<sup>Optional</sup> <a name="ClassName" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindings.property.className"></a>

```go
ClassName *string
```

- *Type:* *string

The exported class name of the Durable Object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/workers_script#class_name WorkersScript#class_name}

---

##### `Dataset`<sup>Optional</sup> <a name="Dataset" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindings.property.dataset"></a>

```go
Dataset *string
```

- *Type:* *string

The name of the dataset to bind to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/workers_script#dataset WorkersScript#dataset}

---

##### `DestinationAddress`<sup>Optional</sup> <a name="DestinationAddress" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindings.property.destinationAddress"></a>

```go
DestinationAddress *string
```

- *Type:* *string

Destination address for the email.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/workers_script#destination_address WorkersScript#destination_address}

---

##### `Environment`<sup>Optional</sup> <a name="Environment" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindings.property.environment"></a>

```go
Environment *string
```

- *Type:* *string

The environment of the script_name to bind to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/workers_script#environment WorkersScript#environment}

---

##### `Format`<sup>Optional</sup> <a name="Format" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindings.property.format"></a>

```go
Format *string
```

- *Type:* *string

Data format of the key. [Learn more](https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/importKey#format). Available values: "raw", "pkcs8", "spki", "jwk".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/workers_script#format WorkersScript#format}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindings.property.id"></a>

```go
Id *string
```

- *Type:* *string

Identifier of the D1 database to bind to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/workers_script#id WorkersScript#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IndexName`<sup>Optional</sup> <a name="IndexName" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindings.property.indexName"></a>

```go
IndexName *string
```

- *Type:* *string

Name of the Vectorize index to bind to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/workers_script#index_name WorkersScript#index_name}

---

##### `Json`<sup>Optional</sup> <a name="Json" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindings.property.json"></a>

```go
Json *string
```

- *Type:* *string

JSON data to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/workers_script#json WorkersScript#json}

---

##### `Jurisdiction`<sup>Optional</sup> <a name="Jurisdiction" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindings.property.jurisdiction"></a>

```go
Jurisdiction *string
```

- *Type:* *string

The [jurisdiction](https://developers.cloudflare.com/r2/reference/data-location/#jurisdictional-restrictions) of the R2 bucket. Available values: "eu", "fedramp".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/workers_script#jurisdiction WorkersScript#jurisdiction}

---

##### `KeyBase64`<sup>Optional</sup> <a name="KeyBase64" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindings.property.keyBase64"></a>

```go
KeyBase64 *string
```

- *Type:* *string

Base64-encoded key data. Required if `format` is "raw", "pkcs8", or "spki".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/workers_script#key_base64 WorkersScript#key_base64}

---

##### `KeyJwk`<sup>Optional</sup> <a name="KeyJwk" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindings.property.keyJwk"></a>

```go
KeyJwk *string
```

- *Type:* *string

Key data in [JSON Web Key](https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/importKey#json_web_key) format. Required if `format` is "jwk".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/workers_script#key_jwk WorkersScript#key_jwk}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindings.property.namespace"></a>

```go
Namespace *string
```

- *Type:* *string

The name of the dispatch namespace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/workers_script#namespace WorkersScript#namespace}

---

##### `NamespaceId`<sup>Optional</sup> <a name="NamespaceId" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindings.property.namespaceId"></a>

```go
NamespaceId *string
```

- *Type:* *string

Namespace identifier tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/workers_script#namespace_id WorkersScript#namespace_id}

---

##### `OldName`<sup>Optional</sup> <a name="OldName" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindings.property.oldName"></a>

```go
OldName *string
```

- *Type:* *string

The old name of the inherited binding.

If set, the binding will be renamed from `old_name` to `name` in the new version. If not set, the binding will keep the same name between versions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/workers_script#old_name WorkersScript#old_name}

---

##### `Outbound`<sup>Optional</sup> <a name="Outbound" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindings.property.outbound"></a>

```go
Outbound WorkersScriptBindingsOutbound
```

- *Type:* <a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutbound">WorkersScriptBindingsOutbound</a>

Outbound worker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/workers_script#outbound WorkersScript#outbound}

---

##### `Part`<sup>Optional</sup> <a name="Part" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindings.property.part"></a>

```go
Part *string
```

- *Type:* *string

The name of the file containing the data content. Only accepted for `service worker syntax` Workers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/workers_script#part WorkersScript#part}

---

##### `Pipeline`<sup>Optional</sup> <a name="Pipeline" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindings.property.pipeline"></a>

```go
Pipeline *string
```

- *Type:* *string

Name of the Pipeline to bind to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/workers_script#pipeline WorkersScript#pipeline}

---

##### `QueueName`<sup>Optional</sup> <a name="QueueName" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindings.property.queueName"></a>

```go
QueueName *string
```

- *Type:* *string

Name of the Queue to bind to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/workers_script#queue_name WorkersScript#queue_name}

---

##### `ScriptName`<sup>Optional</sup> <a name="ScriptName" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindings.property.scriptName"></a>

```go
ScriptName *string
```

- *Type:* *string

The script where the Durable Object is defined, if it is external to this Worker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/workers_script#script_name WorkersScript#script_name}

---

##### `SecretName`<sup>Optional</sup> <a name="SecretName" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindings.property.secretName"></a>

```go
SecretName *string
```

- *Type:* *string

Name of the secret in the store.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/workers_script#secret_name WorkersScript#secret_name}

---

##### `Service`<sup>Optional</sup> <a name="Service" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindings.property.service"></a>

```go
Service *string
```

- *Type:* *string

Name of Worker to bind to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/workers_script#service WorkersScript#service}

---

##### `StoreId`<sup>Optional</sup> <a name="StoreId" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindings.property.storeId"></a>

```go
StoreId *string
```

- *Type:* *string

ID of the store containing the secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/workers_script#store_id WorkersScript#store_id}

---

##### `Text`<sup>Optional</sup> <a name="Text" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindings.property.text"></a>

```go
Text *string
```

- *Type:* *string

The text value to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/workers_script#text WorkersScript#text}

---

##### `Usages`<sup>Optional</sup> <a name="Usages" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindings.property.usages"></a>

```go
Usages *[]*string
```

- *Type:* *[]*string

Allowed operations with the key. [Learn more](https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/importKey#keyUsages).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/workers_script#usages WorkersScript#usages}

---

##### `VersionId`<sup>Optional</sup> <a name="VersionId" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindings.property.versionId"></a>

```go
VersionId *string
```

- *Type:* *string

Identifier for the version to inherit the binding from, which can be the version ID or the literal "latest" to inherit from the latest version.

Defaults to inheriting the binding from the latest version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/workers_script#version_id WorkersScript#version_id}

---

##### `WorkflowName`<sup>Optional</sup> <a name="WorkflowName" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindings.property.workflowName"></a>

```go
WorkflowName *string
```

- *Type:* *string

Name of the Workflow to bind to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/workers_script#workflow_name WorkersScript#workflow_name}

---

### WorkersScriptBindingsOutbound <a name="WorkersScriptBindingsOutbound" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutbound"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutbound.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/workersscript"

&workersscript.WorkersScriptBindingsOutbound {
	Params: *[]*string,
	Worker: github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare.workersScript.WorkersScriptBindingsOutboundWorker,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutbound.property.params">Params</a></code> | <code>*[]*string</code> | Pass information from the Dispatch Worker to the Outbound Worker through the parameters. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutbound.property.worker">Worker</a></code> | <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorker">WorkersScriptBindingsOutboundWorker</a></code> | Outbound worker. |

---

##### `Params`<sup>Optional</sup> <a name="Params" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutbound.property.params"></a>

```go
Params *[]*string
```

- *Type:* *[]*string

Pass information from the Dispatch Worker to the Outbound Worker through the parameters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/workers_script#params WorkersScript#params}

---

##### `Worker`<sup>Optional</sup> <a name="Worker" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutbound.property.worker"></a>

```go
Worker WorkersScriptBindingsOutboundWorker
```

- *Type:* <a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorker">WorkersScriptBindingsOutboundWorker</a>

Outbound worker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/workers_script#worker WorkersScript#worker}

---

### WorkersScriptBindingsOutboundWorker <a name="WorkersScriptBindingsOutboundWorker" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorker"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorker.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/workersscript"

&workersscript.WorkersScriptBindingsOutboundWorker {
	Environment: *string,
	Service: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorker.property.environment">Environment</a></code> | <code>*string</code> | Environment of the outbound worker. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorker.property.service">Service</a></code> | <code>*string</code> | Name of the outbound worker. |

---

##### `Environment`<sup>Optional</sup> <a name="Environment" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorker.property.environment"></a>

```go
Environment *string
```

- *Type:* *string

Environment of the outbound worker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/workers_script#environment WorkersScript#environment}

---

##### `Service`<sup>Optional</sup> <a name="Service" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorker.property.service"></a>

```go
Service *string
```

- *Type:* *string

Name of the outbound worker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/workers_script#service WorkersScript#service}

---

### WorkersScriptConfig <a name="WorkersScriptConfig" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/workersscript"

&workersscript.WorkersScriptConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	AccountId: *string,
	ScriptName: *string,
	Assets: github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare.workersScript.WorkersScriptAssets,
	Bindings: interface{},
	BodyPart: *string,
	CompatibilityDate: *string,
	CompatibilityFlags: *[]*string,
	Content: *string,
	ContentFile: *string,
	ContentSha256: *string,
	ContentType: *string,
	KeepAssets: interface{},
	KeepBindings: *[]*string,
	Limits: github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare.workersScript.WorkersScriptLimits,
	Logpush: interface{},
	MainModule: *string,
	Migrations: github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare.workersScript.WorkersScriptMigrations,
	Observability: github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare.workersScript.WorkersScriptObservability,
	Placement: github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare.workersScript.WorkersScriptPlacement,
	TailConsumers: interface{},
	UsageModel: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptConfig.property.accountId">AccountId</a></code> | <code>*string</code> | Identifier. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptConfig.property.scriptName">ScriptName</a></code> | <code>*string</code> | Name of the script, used in URLs and route configuration. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptConfig.property.assets">Assets</a></code> | <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssets">WorkersScriptAssets</a></code> | Configuration for assets within a Worker. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptConfig.property.bindings">Bindings</a></code> | <code>interface{}</code> | List of bindings attached to a Worker. You can find more about bindings on our docs: https://developers.cloudflare.com/workers/configuration/multipart-upload-metadata/#bindings. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptConfig.property.bodyPart">BodyPart</a></code> | <code>*string</code> | Name of the uploaded file that contains the script (e.g. the file adding a listener to the `fetch` event). Indicates a `service worker syntax` Worker. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptConfig.property.compatibilityDate">CompatibilityDate</a></code> | <code>*string</code> | Date indicating targeted support in the Workers runtime. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptConfig.property.compatibilityFlags">CompatibilityFlags</a></code> | <code>*[]*string</code> | Flags that enable or disable certain features in the Workers runtime. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptConfig.property.content">Content</a></code> | <code>*string</code> | Module or Service Worker contents of the Worker. Conflicts with `content_file`. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptConfig.property.contentFile">ContentFile</a></code> | <code>*string</code> | Path to a file containing the Module or Service Worker contents of the Worker. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptConfig.property.contentSha256">ContentSha256</a></code> | <code>*string</code> | SHA-256 hash of the Worker contents. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptConfig.property.contentType">ContentType</a></code> | <code>*string</code> | Content-Type of the Worker. Required if uploading a non-JavaScript Worker (e.g. "text/x-python"). |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptConfig.property.keepAssets">KeepAssets</a></code> | <code>interface{}</code> | Retain assets which exist for a previously uploaded Worker version; used in lieu of providing a completion token. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptConfig.property.keepBindings">KeepBindings</a></code> | <code>*[]*string</code> | List of binding types to keep from previous_upload. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptConfig.property.limits">Limits</a></code> | <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptLimits">WorkersScriptLimits</a></code> | Limits to apply for this Worker. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptConfig.property.logpush">Logpush</a></code> | <code>interface{}</code> | Whether Logpush is turned on for the Worker. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptConfig.property.mainModule">MainModule</a></code> | <code>*string</code> | Name of the uploaded file that contains the main module (e.g. the file exporting a `fetch` handler). Indicates a `module syntax` Worker. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptConfig.property.migrations">Migrations</a></code> | <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrations">WorkersScriptMigrations</a></code> | Migrations to apply for Durable Objects associated with this Worker. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptConfig.property.observability">Observability</a></code> | <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptObservability">WorkersScriptObservability</a></code> | Observability settings for the Worker. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptConfig.property.placement">Placement</a></code> | <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacement">WorkersScriptPlacement</a></code> | Configuration for [Smart Placement](https://developers.cloudflare.com/workers/configuration/smart-placement). |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptConfig.property.tailConsumers">TailConsumers</a></code> | <code>interface{}</code> | List of Workers that will consume logs from the attached Worker. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptConfig.property.usageModel">UsageModel</a></code> | <code>*string</code> | Usage model for the Worker invocations. Available values: "standard", "bundled", "unbound". |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptConfig.property.accountId"></a>

```go
AccountId *string
```

- *Type:* *string

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/workers_script#account_id WorkersScript#account_id}

---

##### `ScriptName`<sup>Required</sup> <a name="ScriptName" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptConfig.property.scriptName"></a>

```go
ScriptName *string
```

- *Type:* *string

Name of the script, used in URLs and route configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/workers_script#script_name WorkersScript#script_name}

---

##### `Assets`<sup>Optional</sup> <a name="Assets" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptConfig.property.assets"></a>

```go
Assets WorkersScriptAssets
```

- *Type:* <a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssets">WorkersScriptAssets</a>

Configuration for assets within a Worker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/workers_script#assets WorkersScript#assets}

---

##### `Bindings`<sup>Optional</sup> <a name="Bindings" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptConfig.property.bindings"></a>

```go
Bindings interface{}
```

- *Type:* interface{}

List of bindings attached to a Worker. You can find more about bindings on our docs: https://developers.cloudflare.com/workers/configuration/multipart-upload-metadata/#bindings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/workers_script#bindings WorkersScript#bindings}

---

##### `BodyPart`<sup>Optional</sup> <a name="BodyPart" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptConfig.property.bodyPart"></a>

```go
BodyPart *string
```

- *Type:* *string

Name of the uploaded file that contains the script (e.g. the file adding a listener to the `fetch` event). Indicates a `service worker syntax` Worker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/workers_script#body_part WorkersScript#body_part}

---

##### `CompatibilityDate`<sup>Optional</sup> <a name="CompatibilityDate" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptConfig.property.compatibilityDate"></a>

```go
CompatibilityDate *string
```

- *Type:* *string

Date indicating targeted support in the Workers runtime.

Backwards incompatible fixes to the runtime following this date will not affect this Worker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/workers_script#compatibility_date WorkersScript#compatibility_date}

---

##### `CompatibilityFlags`<sup>Optional</sup> <a name="CompatibilityFlags" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptConfig.property.compatibilityFlags"></a>

```go
CompatibilityFlags *[]*string
```

- *Type:* *[]*string

Flags that enable or disable certain features in the Workers runtime.

Used to enable upcoming features or opt in or out of specific changes not included in a `compatibility_date`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/workers_script#compatibility_flags WorkersScript#compatibility_flags}

---

##### `Content`<sup>Optional</sup> <a name="Content" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptConfig.property.content"></a>

```go
Content *string
```

- *Type:* *string

Module or Service Worker contents of the Worker. Conflicts with `content_file`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/workers_script#content WorkersScript#content}

---

##### `ContentFile`<sup>Optional</sup> <a name="ContentFile" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptConfig.property.contentFile"></a>

```go
ContentFile *string
```

- *Type:* *string

Path to a file containing the Module or Service Worker contents of the Worker.

Conflicts with `content`. Must be paired with `content_sha256`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/workers_script#content_file WorkersScript#content_file}

---

##### `ContentSha256`<sup>Optional</sup> <a name="ContentSha256" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptConfig.property.contentSha256"></a>

```go
ContentSha256 *string
```

- *Type:* *string

SHA-256 hash of the Worker contents.

Used to trigger updates when source code changes. Must be provided when `content_file` is specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/workers_script#content_sha256 WorkersScript#content_sha256}

---

##### `ContentType`<sup>Optional</sup> <a name="ContentType" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptConfig.property.contentType"></a>

```go
ContentType *string
```

- *Type:* *string

Content-Type of the Worker. Required if uploading a non-JavaScript Worker (e.g. "text/x-python").

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/workers_script#content_type WorkersScript#content_type}

---

##### `KeepAssets`<sup>Optional</sup> <a name="KeepAssets" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptConfig.property.keepAssets"></a>

```go
KeepAssets interface{}
```

- *Type:* interface{}

Retain assets which exist for a previously uploaded Worker version; used in lieu of providing a completion token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/workers_script#keep_assets WorkersScript#keep_assets}

---

##### `KeepBindings`<sup>Optional</sup> <a name="KeepBindings" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptConfig.property.keepBindings"></a>

```go
KeepBindings *[]*string
```

- *Type:* *[]*string

List of binding types to keep from previous_upload.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/workers_script#keep_bindings WorkersScript#keep_bindings}

---

##### `Limits`<sup>Optional</sup> <a name="Limits" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptConfig.property.limits"></a>

```go
Limits WorkersScriptLimits
```

- *Type:* <a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptLimits">WorkersScriptLimits</a>

Limits to apply for this Worker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/workers_script#limits WorkersScript#limits}

---

##### `Logpush`<sup>Optional</sup> <a name="Logpush" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptConfig.property.logpush"></a>

```go
Logpush interface{}
```

- *Type:* interface{}

Whether Logpush is turned on for the Worker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/workers_script#logpush WorkersScript#logpush}

---

##### `MainModule`<sup>Optional</sup> <a name="MainModule" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptConfig.property.mainModule"></a>

```go
MainModule *string
```

- *Type:* *string

Name of the uploaded file that contains the main module (e.g. the file exporting a `fetch` handler). Indicates a `module syntax` Worker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/workers_script#main_module WorkersScript#main_module}

---

##### `Migrations`<sup>Optional</sup> <a name="Migrations" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptConfig.property.migrations"></a>

```go
Migrations WorkersScriptMigrations
```

- *Type:* <a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrations">WorkersScriptMigrations</a>

Migrations to apply for Durable Objects associated with this Worker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/workers_script#migrations WorkersScript#migrations}

---

##### `Observability`<sup>Optional</sup> <a name="Observability" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptConfig.property.observability"></a>

```go
Observability WorkersScriptObservability
```

- *Type:* <a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptObservability">WorkersScriptObservability</a>

Observability settings for the Worker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/workers_script#observability WorkersScript#observability}

---

##### `Placement`<sup>Optional</sup> <a name="Placement" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptConfig.property.placement"></a>

```go
Placement WorkersScriptPlacement
```

- *Type:* <a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacement">WorkersScriptPlacement</a>

Configuration for [Smart Placement](https://developers.cloudflare.com/workers/configuration/smart-placement).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/workers_script#placement WorkersScript#placement}

---

##### `TailConsumers`<sup>Optional</sup> <a name="TailConsumers" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptConfig.property.tailConsumers"></a>

```go
TailConsumers interface{}
```

- *Type:* interface{}

List of Workers that will consume logs from the attached Worker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/workers_script#tail_consumers WorkersScript#tail_consumers}

---

##### `UsageModel`<sup>Optional</sup> <a name="UsageModel" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptConfig.property.usageModel"></a>

```go
UsageModel *string
```

- *Type:* *string

Usage model for the Worker invocations. Available values: "standard", "bundled", "unbound".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/workers_script#usage_model WorkersScript#usage_model}

---

### WorkersScriptLimits <a name="WorkersScriptLimits" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptLimits"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptLimits.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/workersscript"

&workersscript.WorkersScriptLimits {
	CpuMs: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptLimits.property.cpuMs">CpuMs</a></code> | <code>*f64</code> | The amount of CPU time this Worker can use in milliseconds. |

---

##### `CpuMs`<sup>Optional</sup> <a name="CpuMs" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptLimits.property.cpuMs"></a>

```go
CpuMs *f64
```

- *Type:* *f64

The amount of CPU time this Worker can use in milliseconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/workers_script#cpu_ms WorkersScript#cpu_ms}

---

### WorkersScriptMigrations <a name="WorkersScriptMigrations" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrations.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/workersscript"

&workersscript.WorkersScriptMigrations {
	DeletedClasses: *[]*string,
	NewClasses: *[]*string,
	NewSqliteClasses: *[]*string,
	NewTag: *string,
	OldTag: *string,
	RenamedClasses: interface{},
	Steps: interface{},
	TransferredClasses: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrations.property.deletedClasses">DeletedClasses</a></code> | <code>*[]*string</code> | A list of classes to delete Durable Object namespaces from. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrations.property.newClasses">NewClasses</a></code> | <code>*[]*string</code> | A list of classes to create Durable Object namespaces from. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrations.property.newSqliteClasses">NewSqliteClasses</a></code> | <code>*[]*string</code> | A list of classes to create Durable Object namespaces with SQLite from. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrations.property.newTag">NewTag</a></code> | <code>*string</code> | Tag to set as the latest migration tag. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrations.property.oldTag">OldTag</a></code> | <code>*string</code> | Tag used to verify against the latest migration tag for this Worker. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrations.property.renamedClasses">RenamedClasses</a></code> | <code>interface{}</code> | A list of classes with Durable Object namespaces that were renamed. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrations.property.steps">Steps</a></code> | <code>interface{}</code> | Migrations to apply in order. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrations.property.transferredClasses">TransferredClasses</a></code> | <code>interface{}</code> | A list of transfers for Durable Object namespaces from a different Worker and class to a class defined in this Worker. |

---

##### `DeletedClasses`<sup>Optional</sup> <a name="DeletedClasses" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrations.property.deletedClasses"></a>

```go
DeletedClasses *[]*string
```

- *Type:* *[]*string

A list of classes to delete Durable Object namespaces from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/workers_script#deleted_classes WorkersScript#deleted_classes}

---

##### `NewClasses`<sup>Optional</sup> <a name="NewClasses" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrations.property.newClasses"></a>

```go
NewClasses *[]*string
```

- *Type:* *[]*string

A list of classes to create Durable Object namespaces from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/workers_script#new_classes WorkersScript#new_classes}

---

##### `NewSqliteClasses`<sup>Optional</sup> <a name="NewSqliteClasses" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrations.property.newSqliteClasses"></a>

```go
NewSqliteClasses *[]*string
```

- *Type:* *[]*string

A list of classes to create Durable Object namespaces with SQLite from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/workers_script#new_sqlite_classes WorkersScript#new_sqlite_classes}

---

##### `NewTag`<sup>Optional</sup> <a name="NewTag" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrations.property.newTag"></a>

```go
NewTag *string
```

- *Type:* *string

Tag to set as the latest migration tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/workers_script#new_tag WorkersScript#new_tag}

---

##### `OldTag`<sup>Optional</sup> <a name="OldTag" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrations.property.oldTag"></a>

```go
OldTag *string
```

- *Type:* *string

Tag used to verify against the latest migration tag for this Worker.

If they don't match, the upload is rejected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/workers_script#old_tag WorkersScript#old_tag}

---

##### `RenamedClasses`<sup>Optional</sup> <a name="RenamedClasses" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrations.property.renamedClasses"></a>

```go
RenamedClasses interface{}
```

- *Type:* interface{}

A list of classes with Durable Object namespaces that were renamed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/workers_script#renamed_classes WorkersScript#renamed_classes}

---

##### `Steps`<sup>Optional</sup> <a name="Steps" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrations.property.steps"></a>

```go
Steps interface{}
```

- *Type:* interface{}

Migrations to apply in order.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/workers_script#steps WorkersScript#steps}

---

##### `TransferredClasses`<sup>Optional</sup> <a name="TransferredClasses" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrations.property.transferredClasses"></a>

```go
TransferredClasses interface{}
```

- *Type:* interface{}

A list of transfers for Durable Object namespaces from a different Worker and class to a class defined in this Worker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/workers_script#transferred_classes WorkersScript#transferred_classes}

---

### WorkersScriptMigrationsRenamedClasses <a name="WorkersScriptMigrationsRenamedClasses" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClasses"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClasses.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/workersscript"

&workersscript.WorkersScriptMigrationsRenamedClasses {
	From: *string,
	To: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClasses.property.from">From</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/workers_script#from WorkersScript#from}. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClasses.property.to">To</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/workers_script#to WorkersScript#to}. |

---

##### `From`<sup>Optional</sup> <a name="From" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClasses.property.from"></a>

```go
From *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/workers_script#from WorkersScript#from}.

---

##### `To`<sup>Optional</sup> <a name="To" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClasses.property.to"></a>

```go
To *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/workers_script#to WorkersScript#to}.

---

### WorkersScriptMigrationsSteps <a name="WorkersScriptMigrationsSteps" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsSteps"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsSteps.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/workersscript"

&workersscript.WorkersScriptMigrationsSteps {
	DeletedClasses: *[]*string,
	NewClasses: *[]*string,
	NewSqliteClasses: *[]*string,
	RenamedClasses: interface{},
	TransferredClasses: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsSteps.property.deletedClasses">DeletedClasses</a></code> | <code>*[]*string</code> | A list of classes to delete Durable Object namespaces from. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsSteps.property.newClasses">NewClasses</a></code> | <code>*[]*string</code> | A list of classes to create Durable Object namespaces from. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsSteps.property.newSqliteClasses">NewSqliteClasses</a></code> | <code>*[]*string</code> | A list of classes to create Durable Object namespaces with SQLite from. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsSteps.property.renamedClasses">RenamedClasses</a></code> | <code>interface{}</code> | A list of classes with Durable Object namespaces that were renamed. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsSteps.property.transferredClasses">TransferredClasses</a></code> | <code>interface{}</code> | A list of transfers for Durable Object namespaces from a different Worker and class to a class defined in this Worker. |

---

##### `DeletedClasses`<sup>Optional</sup> <a name="DeletedClasses" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsSteps.property.deletedClasses"></a>

```go
DeletedClasses *[]*string
```

- *Type:* *[]*string

A list of classes to delete Durable Object namespaces from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/workers_script#deleted_classes WorkersScript#deleted_classes}

---

##### `NewClasses`<sup>Optional</sup> <a name="NewClasses" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsSteps.property.newClasses"></a>

```go
NewClasses *[]*string
```

- *Type:* *[]*string

A list of classes to create Durable Object namespaces from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/workers_script#new_classes WorkersScript#new_classes}

---

##### `NewSqliteClasses`<sup>Optional</sup> <a name="NewSqliteClasses" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsSteps.property.newSqliteClasses"></a>

```go
NewSqliteClasses *[]*string
```

- *Type:* *[]*string

A list of classes to create Durable Object namespaces with SQLite from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/workers_script#new_sqlite_classes WorkersScript#new_sqlite_classes}

---

##### `RenamedClasses`<sup>Optional</sup> <a name="RenamedClasses" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsSteps.property.renamedClasses"></a>

```go
RenamedClasses interface{}
```

- *Type:* interface{}

A list of classes with Durable Object namespaces that were renamed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/workers_script#renamed_classes WorkersScript#renamed_classes}

---

##### `TransferredClasses`<sup>Optional</sup> <a name="TransferredClasses" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsSteps.property.transferredClasses"></a>

```go
TransferredClasses interface{}
```

- *Type:* interface{}

A list of transfers for Durable Object namespaces from a different Worker and class to a class defined in this Worker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/workers_script#transferred_classes WorkersScript#transferred_classes}

---

### WorkersScriptMigrationsStepsRenamedClasses <a name="WorkersScriptMigrationsStepsRenamedClasses" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClasses"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClasses.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/workersscript"

&workersscript.WorkersScriptMigrationsStepsRenamedClasses {
	From: *string,
	To: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClasses.property.from">From</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/workers_script#from WorkersScript#from}. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClasses.property.to">To</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/workers_script#to WorkersScript#to}. |

---

##### `From`<sup>Optional</sup> <a name="From" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClasses.property.from"></a>

```go
From *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/workers_script#from WorkersScript#from}.

---

##### `To`<sup>Optional</sup> <a name="To" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClasses.property.to"></a>

```go
To *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/workers_script#to WorkersScript#to}.

---

### WorkersScriptMigrationsStepsTransferredClasses <a name="WorkersScriptMigrationsStepsTransferredClasses" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClasses"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClasses.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/workersscript"

&workersscript.WorkersScriptMigrationsStepsTransferredClasses {
	From: *string,
	FromScript: *string,
	To: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClasses.property.from">From</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/workers_script#from WorkersScript#from}. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClasses.property.fromScript">FromScript</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/workers_script#from_script WorkersScript#from_script}. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClasses.property.to">To</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/workers_script#to WorkersScript#to}. |

---

##### `From`<sup>Optional</sup> <a name="From" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClasses.property.from"></a>

```go
From *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/workers_script#from WorkersScript#from}.

---

##### `FromScript`<sup>Optional</sup> <a name="FromScript" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClasses.property.fromScript"></a>

```go
FromScript *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/workers_script#from_script WorkersScript#from_script}.

---

##### `To`<sup>Optional</sup> <a name="To" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClasses.property.to"></a>

```go
To *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/workers_script#to WorkersScript#to}.

---

### WorkersScriptMigrationsTransferredClasses <a name="WorkersScriptMigrationsTransferredClasses" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClasses"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClasses.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/workersscript"

&workersscript.WorkersScriptMigrationsTransferredClasses {
	From: *string,
	FromScript: *string,
	To: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClasses.property.from">From</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/workers_script#from WorkersScript#from}. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClasses.property.fromScript">FromScript</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/workers_script#from_script WorkersScript#from_script}. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClasses.property.to">To</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/workers_script#to WorkersScript#to}. |

---

##### `From`<sup>Optional</sup> <a name="From" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClasses.property.from"></a>

```go
From *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/workers_script#from WorkersScript#from}.

---

##### `FromScript`<sup>Optional</sup> <a name="FromScript" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClasses.property.fromScript"></a>

```go
FromScript *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/workers_script#from_script WorkersScript#from_script}.

---

##### `To`<sup>Optional</sup> <a name="To" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClasses.property.to"></a>

```go
To *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/workers_script#to WorkersScript#to}.

---

### WorkersScriptNamedHandlers <a name="WorkersScriptNamedHandlers" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptNamedHandlers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptNamedHandlers.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/workersscript"

&workersscript.WorkersScriptNamedHandlers {

}
```


### WorkersScriptObservability <a name="WorkersScriptObservability" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservability"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservability.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/workersscript"

&workersscript.WorkersScriptObservability {
	Enabled: interface{},
	HeadSamplingRate: *f64,
	Logs: github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare.workersScript.WorkersScriptObservabilityLogs,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptObservability.property.enabled">Enabled</a></code> | <code>interface{}</code> | Whether observability is enabled for the Worker. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptObservability.property.headSamplingRate">HeadSamplingRate</a></code> | <code>*f64</code> | The sampling rate for incoming requests. From 0 to 1 (1 = 100%, 0.1 = 10%). Default is 1. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptObservability.property.logs">Logs</a></code> | <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogs">WorkersScriptObservabilityLogs</a></code> | Log settings for the Worker. |

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservability.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Whether observability is enabled for the Worker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/workers_script#enabled WorkersScript#enabled}

---

##### `HeadSamplingRate`<sup>Optional</sup> <a name="HeadSamplingRate" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservability.property.headSamplingRate"></a>

```go
HeadSamplingRate *f64
```

- *Type:* *f64

The sampling rate for incoming requests. From 0 to 1 (1 = 100%, 0.1 = 10%). Default is 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/workers_script#head_sampling_rate WorkersScript#head_sampling_rate}

---

##### `Logs`<sup>Optional</sup> <a name="Logs" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservability.property.logs"></a>

```go
Logs WorkersScriptObservabilityLogs
```

- *Type:* <a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogs">WorkersScriptObservabilityLogs</a>

Log settings for the Worker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/workers_script#logs WorkersScript#logs}

---

### WorkersScriptObservabilityLogs <a name="WorkersScriptObservabilityLogs" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogs.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/workersscript"

&workersscript.WorkersScriptObservabilityLogs {
	Enabled: interface{},
	InvocationLogs: interface{},
	Destinations: *[]*string,
	HeadSamplingRate: *f64,
	Persist: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogs.property.enabled">Enabled</a></code> | <code>interface{}</code> | Whether logs are enabled for the Worker. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogs.property.invocationLogs">InvocationLogs</a></code> | <code>interface{}</code> | Whether [invocation logs](https://developers.cloudflare.com/workers/observability/logs/workers-logs/#invocation-logs) are enabled for the Worker. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogs.property.destinations">Destinations</a></code> | <code>*[]*string</code> | A list of destinations where logs will be exported to. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogs.property.headSamplingRate">HeadSamplingRate</a></code> | <code>*f64</code> | The sampling rate for logs. From 0 to 1 (1 = 100%, 0.1 = 10%). Default is 1. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogs.property.persist">Persist</a></code> | <code>interface{}</code> | Whether log persistence is enabled for the Worker. |

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogs.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Whether logs are enabled for the Worker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/workers_script#enabled WorkersScript#enabled}

---

##### `InvocationLogs`<sup>Required</sup> <a name="InvocationLogs" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogs.property.invocationLogs"></a>

```go
InvocationLogs interface{}
```

- *Type:* interface{}

Whether [invocation logs](https://developers.cloudflare.com/workers/observability/logs/workers-logs/#invocation-logs) are enabled for the Worker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/workers_script#invocation_logs WorkersScript#invocation_logs}

---

##### `Destinations`<sup>Optional</sup> <a name="Destinations" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogs.property.destinations"></a>

```go
Destinations *[]*string
```

- *Type:* *[]*string

A list of destinations where logs will be exported to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/workers_script#destinations WorkersScript#destinations}

---

##### `HeadSamplingRate`<sup>Optional</sup> <a name="HeadSamplingRate" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogs.property.headSamplingRate"></a>

```go
HeadSamplingRate *f64
```

- *Type:* *f64

The sampling rate for logs. From 0 to 1 (1 = 100%, 0.1 = 10%). Default is 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/workers_script#head_sampling_rate WorkersScript#head_sampling_rate}

---

##### `Persist`<sup>Optional</sup> <a name="Persist" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogs.property.persist"></a>

```go
Persist interface{}
```

- *Type:* interface{}

Whether log persistence is enabled for the Worker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/workers_script#persist WorkersScript#persist}

---

### WorkersScriptPlacement <a name="WorkersScriptPlacement" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacement"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacement.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/workersscript"

&workersscript.WorkersScriptPlacement {
	Mode: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacement.property.mode">Mode</a></code> | <code>*string</code> | Enables [Smart Placement](https://developers.cloudflare.com/workers/configuration/smart-placement). Available values: "smart". |

---

##### `Mode`<sup>Optional</sup> <a name="Mode" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacement.property.mode"></a>

```go
Mode *string
```

- *Type:* *string

Enables [Smart Placement](https://developers.cloudflare.com/workers/configuration/smart-placement). Available values: "smart".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/workers_script#mode WorkersScript#mode}

---

### WorkersScriptTailConsumers <a name="WorkersScriptTailConsumers" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumers.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/workersscript"

&workersscript.WorkersScriptTailConsumers {
	Service: *string,
	Environment: *string,
	Namespace: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumers.property.service">Service</a></code> | <code>*string</code> | Name of Worker that is to be the consumer. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumers.property.environment">Environment</a></code> | <code>*string</code> | Optional environment if the Worker utilizes one. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumers.property.namespace">Namespace</a></code> | <code>*string</code> | Optional dispatch namespace the script belongs to. |

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumers.property.service"></a>

```go
Service *string
```

- *Type:* *string

Name of Worker that is to be the consumer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/workers_script#service WorkersScript#service}

---

##### `Environment`<sup>Optional</sup> <a name="Environment" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumers.property.environment"></a>

```go
Environment *string
```

- *Type:* *string

Optional environment if the Worker utilizes one.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/workers_script#environment WorkersScript#environment}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumers.property.namespace"></a>

```go
Namespace *string
```

- *Type:* *string

Optional dispatch namespace the script belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/workers_script#namespace WorkersScript#namespace}

---

## Classes <a name="Classes" id="Classes"></a>

### WorkersScriptAssetsConfigOutputReference <a name="WorkersScriptAssetsConfigOutputReference" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/workersscript"

workersscript.NewWorkersScriptAssetsConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) WorkersScriptAssetsConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.resetHeaders">ResetHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.resetHtmlHandling">ResetHtmlHandling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.resetNotFoundHandling">ResetNotFoundHandling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.resetRedirects">ResetRedirects</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.resetRunWorkerFirst">ResetRunWorkerFirst</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.resetServeDirectly">ResetServeDirectly</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetHeaders` <a name="ResetHeaders" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.resetHeaders"></a>

```go
func ResetHeaders()
```

##### `ResetHtmlHandling` <a name="ResetHtmlHandling" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.resetHtmlHandling"></a>

```go
func ResetHtmlHandling()
```

##### `ResetNotFoundHandling` <a name="ResetNotFoundHandling" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.resetNotFoundHandling"></a>

```go
func ResetNotFoundHandling()
```

##### `ResetRedirects` <a name="ResetRedirects" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.resetRedirects"></a>

```go
func ResetRedirects()
```

##### `ResetRunWorkerFirst` <a name="ResetRunWorkerFirst" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.resetRunWorkerFirst"></a>

```go
func ResetRunWorkerFirst()
```

##### `ResetServeDirectly` <a name="ResetServeDirectly" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.resetServeDirectly"></a>

```go
func ResetServeDirectly()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.property.headersInput">HeadersInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.property.htmlHandlingInput">HtmlHandlingInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.property.notFoundHandlingInput">NotFoundHandlingInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.property.redirectsInput">RedirectsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.property.runWorkerFirstInput">RunWorkerFirstInput</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.property.serveDirectlyInput">ServeDirectlyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.property.headers">Headers</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.property.htmlHandling">HtmlHandling</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.property.notFoundHandling">NotFoundHandling</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.property.redirects">Redirects</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.property.runWorkerFirst">RunWorkerFirst</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.property.serveDirectly">ServeDirectly</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `HeadersInput`<sup>Optional</sup> <a name="HeadersInput" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.property.headersInput"></a>

```go
func HeadersInput() *string
```

- *Type:* *string

---

##### `HtmlHandlingInput`<sup>Optional</sup> <a name="HtmlHandlingInput" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.property.htmlHandlingInput"></a>

```go
func HtmlHandlingInput() *string
```

- *Type:* *string

---

##### `NotFoundHandlingInput`<sup>Optional</sup> <a name="NotFoundHandlingInput" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.property.notFoundHandlingInput"></a>

```go
func NotFoundHandlingInput() *string
```

- *Type:* *string

---

##### `RedirectsInput`<sup>Optional</sup> <a name="RedirectsInput" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.property.redirectsInput"></a>

```go
func RedirectsInput() *string
```

- *Type:* *string

---

##### `RunWorkerFirstInput`<sup>Optional</sup> <a name="RunWorkerFirstInput" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.property.runWorkerFirstInput"></a>

```go
func RunWorkerFirstInput() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `ServeDirectlyInput`<sup>Optional</sup> <a name="ServeDirectlyInput" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.property.serveDirectlyInput"></a>

```go
func ServeDirectlyInput() interface{}
```

- *Type:* interface{}

---

##### `Headers`<sup>Required</sup> <a name="Headers" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.property.headers"></a>

```go
func Headers() *string
```

- *Type:* *string

---

##### `HtmlHandling`<sup>Required</sup> <a name="HtmlHandling" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.property.htmlHandling"></a>

```go
func HtmlHandling() *string
```

- *Type:* *string

---

##### `NotFoundHandling`<sup>Required</sup> <a name="NotFoundHandling" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.property.notFoundHandling"></a>

```go
func NotFoundHandling() *string
```

- *Type:* *string

---

##### `Redirects`<sup>Required</sup> <a name="Redirects" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.property.redirects"></a>

```go
func Redirects() *string
```

- *Type:* *string

---

##### `RunWorkerFirst`<sup>Required</sup> <a name="RunWorkerFirst" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.property.runWorkerFirst"></a>

```go
func RunWorkerFirst() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `ServeDirectly`<sup>Required</sup> <a name="ServeDirectly" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.property.serveDirectly"></a>

```go
func ServeDirectly() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### WorkersScriptAssetsOutputReference <a name="WorkersScriptAssetsOutputReference" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/workersscript"

workersscript.NewWorkersScriptAssetsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) WorkersScriptAssetsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.putConfig">PutConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.resetConfig">ResetConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.resetDirectory">ResetDirectory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.resetJwt">ResetJwt</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutConfig` <a name="PutConfig" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.putConfig"></a>

```go
func PutConfig(value WorkersScriptAssetsConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.putConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfig">WorkersScriptAssetsConfig</a>

---

##### `ResetConfig` <a name="ResetConfig" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.resetConfig"></a>

```go
func ResetConfig()
```

##### `ResetDirectory` <a name="ResetDirectory" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.resetDirectory"></a>

```go
func ResetDirectory()
```

##### `ResetJwt` <a name="ResetJwt" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.resetJwt"></a>

```go
func ResetJwt()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.property.assetManifestSha256">AssetManifestSha256</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.property.config">Config</a></code> | <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference">WorkersScriptAssetsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.property.configInput">ConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.property.directoryInput">DirectoryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.property.jwtInput">JwtInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.property.directory">Directory</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.property.jwt">Jwt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AssetManifestSha256`<sup>Required</sup> <a name="AssetManifestSha256" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.property.assetManifestSha256"></a>

```go
func AssetManifestSha256() *string
```

- *Type:* *string

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.property.config"></a>

```go
func Config() WorkersScriptAssetsConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference">WorkersScriptAssetsConfigOutputReference</a>

---

##### `ConfigInput`<sup>Optional</sup> <a name="ConfigInput" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.property.configInput"></a>

```go
func ConfigInput() interface{}
```

- *Type:* interface{}

---

##### `DirectoryInput`<sup>Optional</sup> <a name="DirectoryInput" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.property.directoryInput"></a>

```go
func DirectoryInput() *string
```

- *Type:* *string

---

##### `JwtInput`<sup>Optional</sup> <a name="JwtInput" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.property.jwtInput"></a>

```go
func JwtInput() *string
```

- *Type:* *string

---

##### `Directory`<sup>Required</sup> <a name="Directory" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.property.directory"></a>

```go
func Directory() *string
```

- *Type:* *string

---

##### `Jwt`<sup>Required</sup> <a name="Jwt" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.property.jwt"></a>

```go
func Jwt() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### WorkersScriptBindingsList <a name="WorkersScriptBindingsList" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/workersscript"

workersscript.NewWorkersScriptBindingsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) WorkersScriptBindingsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsList.get"></a>

```go
func Get(index *f64) WorkersScriptBindingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### WorkersScriptBindingsOutboundOutputReference <a name="WorkersScriptBindingsOutboundOutputReference" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/workersscript"

workersscript.NewWorkersScriptBindingsOutboundOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) WorkersScriptBindingsOutboundOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundOutputReference.putWorker">PutWorker</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundOutputReference.resetParams">ResetParams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundOutputReference.resetWorker">ResetWorker</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutWorker` <a name="PutWorker" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundOutputReference.putWorker"></a>

```go
func PutWorker(value WorkersScriptBindingsOutboundWorker)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundOutputReference.putWorker.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorker">WorkersScriptBindingsOutboundWorker</a>

---

##### `ResetParams` <a name="ResetParams" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundOutputReference.resetParams"></a>

```go
func ResetParams()
```

##### `ResetWorker` <a name="ResetWorker" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundOutputReference.resetWorker"></a>

```go
func ResetWorker()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundOutputReference.property.worker">Worker</a></code> | <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorkerOutputReference">WorkersScriptBindingsOutboundWorkerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundOutputReference.property.paramsInput">ParamsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundOutputReference.property.workerInput">WorkerInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundOutputReference.property.params">Params</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Worker`<sup>Required</sup> <a name="Worker" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundOutputReference.property.worker"></a>

```go
func Worker() WorkersScriptBindingsOutboundWorkerOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorkerOutputReference">WorkersScriptBindingsOutboundWorkerOutputReference</a>

---

##### `ParamsInput`<sup>Optional</sup> <a name="ParamsInput" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundOutputReference.property.paramsInput"></a>

```go
func ParamsInput() *[]*string
```

- *Type:* *[]*string

---

##### `WorkerInput`<sup>Optional</sup> <a name="WorkerInput" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundOutputReference.property.workerInput"></a>

```go
func WorkerInput() interface{}
```

- *Type:* interface{}

---

##### `Params`<sup>Required</sup> <a name="Params" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundOutputReference.property.params"></a>

```go
func Params() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### WorkersScriptBindingsOutboundWorkerOutputReference <a name="WorkersScriptBindingsOutboundWorkerOutputReference" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorkerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorkerOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/workersscript"

workersscript.NewWorkersScriptBindingsOutboundWorkerOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) WorkersScriptBindingsOutboundWorkerOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorkerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorkerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorkerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorkerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorkerOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorkerOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorkerOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorkerOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorkerOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorkerOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorkerOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorkerOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorkerOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorkerOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorkerOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorkerOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorkerOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorkerOutputReference.resetEnvironment">ResetEnvironment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorkerOutputReference.resetService">ResetService</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorkerOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorkerOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorkerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorkerOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorkerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorkerOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorkerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorkerOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorkerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorkerOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorkerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorkerOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorkerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorkerOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorkerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorkerOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorkerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorkerOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorkerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorkerOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorkerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorkerOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorkerOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorkerOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnvironment` <a name="ResetEnvironment" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorkerOutputReference.resetEnvironment"></a>

```go
func ResetEnvironment()
```

##### `ResetService` <a name="ResetService" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorkerOutputReference.resetService"></a>

```go
func ResetService()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorkerOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorkerOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorkerOutputReference.property.environmentInput">EnvironmentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorkerOutputReference.property.serviceInput">ServiceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorkerOutputReference.property.environment">Environment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorkerOutputReference.property.service">Service</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorkerOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorkerOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorkerOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EnvironmentInput`<sup>Optional</sup> <a name="EnvironmentInput" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorkerOutputReference.property.environmentInput"></a>

```go
func EnvironmentInput() *string
```

- *Type:* *string

---

##### `ServiceInput`<sup>Optional</sup> <a name="ServiceInput" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorkerOutputReference.property.serviceInput"></a>

```go
func ServiceInput() *string
```

- *Type:* *string

---

##### `Environment`<sup>Required</sup> <a name="Environment" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorkerOutputReference.property.environment"></a>

```go
func Environment() *string
```

- *Type:* *string

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorkerOutputReference.property.service"></a>

```go
func Service() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorkerOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### WorkersScriptBindingsOutputReference <a name="WorkersScriptBindingsOutputReference" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/workersscript"

workersscript.NewWorkersScriptBindingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) WorkersScriptBindingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.putOutbound">PutOutbound</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.resetAlgorithm">ResetAlgorithm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.resetAllowedDestinationAddresses">ResetAllowedDestinationAddresses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.resetAllowedSenderAddresses">ResetAllowedSenderAddresses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.resetBucketName">ResetBucketName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.resetCertificateId">ResetCertificateId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.resetClassName">ResetClassName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.resetDataset">ResetDataset</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.resetDestinationAddress">ResetDestinationAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.resetEnvironment">ResetEnvironment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.resetFormat">ResetFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.resetIndexName">ResetIndexName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.resetJson">ResetJson</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.resetJurisdiction">ResetJurisdiction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.resetKeyBase64">ResetKeyBase64</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.resetKeyJwk">ResetKeyJwk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.resetNamespace">ResetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.resetNamespaceId">ResetNamespaceId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.resetOldName">ResetOldName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.resetOutbound">ResetOutbound</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.resetPart">ResetPart</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.resetPipeline">ResetPipeline</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.resetQueueName">ResetQueueName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.resetScriptName">ResetScriptName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.resetSecretName">ResetSecretName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.resetService">ResetService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.resetStoreId">ResetStoreId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.resetText">ResetText</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.resetUsages">ResetUsages</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.resetVersionId">ResetVersionId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.resetWorkflowName">ResetWorkflowName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutOutbound` <a name="PutOutbound" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.putOutbound"></a>

```go
func PutOutbound(value WorkersScriptBindingsOutbound)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.putOutbound.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutbound">WorkersScriptBindingsOutbound</a>

---

##### `ResetAlgorithm` <a name="ResetAlgorithm" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.resetAlgorithm"></a>

```go
func ResetAlgorithm()
```

##### `ResetAllowedDestinationAddresses` <a name="ResetAllowedDestinationAddresses" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.resetAllowedDestinationAddresses"></a>

```go
func ResetAllowedDestinationAddresses()
```

##### `ResetAllowedSenderAddresses` <a name="ResetAllowedSenderAddresses" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.resetAllowedSenderAddresses"></a>

```go
func ResetAllowedSenderAddresses()
```

##### `ResetBucketName` <a name="ResetBucketName" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.resetBucketName"></a>

```go
func ResetBucketName()
```

##### `ResetCertificateId` <a name="ResetCertificateId" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.resetCertificateId"></a>

```go
func ResetCertificateId()
```

##### `ResetClassName` <a name="ResetClassName" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.resetClassName"></a>

```go
func ResetClassName()
```

##### `ResetDataset` <a name="ResetDataset" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.resetDataset"></a>

```go
func ResetDataset()
```

##### `ResetDestinationAddress` <a name="ResetDestinationAddress" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.resetDestinationAddress"></a>

```go
func ResetDestinationAddress()
```

##### `ResetEnvironment` <a name="ResetEnvironment" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.resetEnvironment"></a>

```go
func ResetEnvironment()
```

##### `ResetFormat` <a name="ResetFormat" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.resetFormat"></a>

```go
func ResetFormat()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.resetId"></a>

```go
func ResetId()
```

##### `ResetIndexName` <a name="ResetIndexName" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.resetIndexName"></a>

```go
func ResetIndexName()
```

##### `ResetJson` <a name="ResetJson" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.resetJson"></a>

```go
func ResetJson()
```

##### `ResetJurisdiction` <a name="ResetJurisdiction" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.resetJurisdiction"></a>

```go
func ResetJurisdiction()
```

##### `ResetKeyBase64` <a name="ResetKeyBase64" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.resetKeyBase64"></a>

```go
func ResetKeyBase64()
```

##### `ResetKeyJwk` <a name="ResetKeyJwk" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.resetKeyJwk"></a>

```go
func ResetKeyJwk()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.resetNamespace"></a>

```go
func ResetNamespace()
```

##### `ResetNamespaceId` <a name="ResetNamespaceId" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.resetNamespaceId"></a>

```go
func ResetNamespaceId()
```

##### `ResetOldName` <a name="ResetOldName" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.resetOldName"></a>

```go
func ResetOldName()
```

##### `ResetOutbound` <a name="ResetOutbound" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.resetOutbound"></a>

```go
func ResetOutbound()
```

##### `ResetPart` <a name="ResetPart" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.resetPart"></a>

```go
func ResetPart()
```

##### `ResetPipeline` <a name="ResetPipeline" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.resetPipeline"></a>

```go
func ResetPipeline()
```

##### `ResetQueueName` <a name="ResetQueueName" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.resetQueueName"></a>

```go
func ResetQueueName()
```

##### `ResetScriptName` <a name="ResetScriptName" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.resetScriptName"></a>

```go
func ResetScriptName()
```

##### `ResetSecretName` <a name="ResetSecretName" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.resetSecretName"></a>

```go
func ResetSecretName()
```

##### `ResetService` <a name="ResetService" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.resetService"></a>

```go
func ResetService()
```

##### `ResetStoreId` <a name="ResetStoreId" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.resetStoreId"></a>

```go
func ResetStoreId()
```

##### `ResetText` <a name="ResetText" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.resetText"></a>

```go
func ResetText()
```

##### `ResetUsages` <a name="ResetUsages" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.resetUsages"></a>

```go
func ResetUsages()
```

##### `ResetVersionId` <a name="ResetVersionId" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.resetVersionId"></a>

```go
func ResetVersionId()
```

##### `ResetWorkflowName` <a name="ResetWorkflowName" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.resetWorkflowName"></a>

```go
func ResetWorkflowName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.outbound">Outbound</a></code> | <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundOutputReference">WorkersScriptBindingsOutboundOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.algorithmInput">AlgorithmInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.allowedDestinationAddressesInput">AllowedDestinationAddressesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.allowedSenderAddressesInput">AllowedSenderAddressesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.bucketNameInput">BucketNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.certificateIdInput">CertificateIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.classNameInput">ClassNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.datasetInput">DatasetInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.destinationAddressInput">DestinationAddressInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.environmentInput">EnvironmentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.formatInput">FormatInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.indexNameInput">IndexNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.jsonInput">JsonInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.jurisdictionInput">JurisdictionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.keyBase64Input">KeyBase64Input</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.keyJwkInput">KeyJwkInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.namespaceIdInput">NamespaceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.namespaceInput">NamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.oldNameInput">OldNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.outboundInput">OutboundInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.partInput">PartInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.pipelineInput">PipelineInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.queueNameInput">QueueNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.scriptNameInput">ScriptNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.secretNameInput">SecretNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.serviceInput">ServiceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.storeIdInput">StoreIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.textInput">TextInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.usagesInput">UsagesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.versionIdInput">VersionIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.workflowNameInput">WorkflowNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.algorithm">Algorithm</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.allowedDestinationAddresses">AllowedDestinationAddresses</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.allowedSenderAddresses">AllowedSenderAddresses</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.bucketName">BucketName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.certificateId">CertificateId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.className">ClassName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.dataset">Dataset</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.destinationAddress">DestinationAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.environment">Environment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.format">Format</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.indexName">IndexName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.json">Json</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.jurisdiction">Jurisdiction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.keyBase64">KeyBase64</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.keyJwk">KeyJwk</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.namespaceId">NamespaceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.oldName">OldName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.part">Part</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.pipeline">Pipeline</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.queueName">QueueName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.scriptName">ScriptName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.secretName">SecretName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.service">Service</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.storeId">StoreId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.text">Text</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.usages">Usages</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.versionId">VersionId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.workflowName">WorkflowName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Outbound`<sup>Required</sup> <a name="Outbound" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.outbound"></a>

```go
func Outbound() WorkersScriptBindingsOutboundOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundOutputReference">WorkersScriptBindingsOutboundOutputReference</a>

---

##### `AlgorithmInput`<sup>Optional</sup> <a name="AlgorithmInput" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.algorithmInput"></a>

```go
func AlgorithmInput() *string
```

- *Type:* *string

---

##### `AllowedDestinationAddressesInput`<sup>Optional</sup> <a name="AllowedDestinationAddressesInput" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.allowedDestinationAddressesInput"></a>

```go
func AllowedDestinationAddressesInput() *[]*string
```

- *Type:* *[]*string

---

##### `AllowedSenderAddressesInput`<sup>Optional</sup> <a name="AllowedSenderAddressesInput" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.allowedSenderAddressesInput"></a>

```go
func AllowedSenderAddressesInput() *[]*string
```

- *Type:* *[]*string

---

##### `BucketNameInput`<sup>Optional</sup> <a name="BucketNameInput" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.bucketNameInput"></a>

```go
func BucketNameInput() *string
```

- *Type:* *string

---

##### `CertificateIdInput`<sup>Optional</sup> <a name="CertificateIdInput" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.certificateIdInput"></a>

```go
func CertificateIdInput() *string
```

- *Type:* *string

---

##### `ClassNameInput`<sup>Optional</sup> <a name="ClassNameInput" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.classNameInput"></a>

```go
func ClassNameInput() *string
```

- *Type:* *string

---

##### `DatasetInput`<sup>Optional</sup> <a name="DatasetInput" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.datasetInput"></a>

```go
func DatasetInput() *string
```

- *Type:* *string

---

##### `DestinationAddressInput`<sup>Optional</sup> <a name="DestinationAddressInput" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.destinationAddressInput"></a>

```go
func DestinationAddressInput() *string
```

- *Type:* *string

---

##### `EnvironmentInput`<sup>Optional</sup> <a name="EnvironmentInput" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.environmentInput"></a>

```go
func EnvironmentInput() *string
```

- *Type:* *string

---

##### `FormatInput`<sup>Optional</sup> <a name="FormatInput" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.formatInput"></a>

```go
func FormatInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IndexNameInput`<sup>Optional</sup> <a name="IndexNameInput" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.indexNameInput"></a>

```go
func IndexNameInput() *string
```

- *Type:* *string

---

##### `JsonInput`<sup>Optional</sup> <a name="JsonInput" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.jsonInput"></a>

```go
func JsonInput() *string
```

- *Type:* *string

---

##### `JurisdictionInput`<sup>Optional</sup> <a name="JurisdictionInput" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.jurisdictionInput"></a>

```go
func JurisdictionInput() *string
```

- *Type:* *string

---

##### `KeyBase64Input`<sup>Optional</sup> <a name="KeyBase64Input" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.keyBase64Input"></a>

```go
func KeyBase64Input() *string
```

- *Type:* *string

---

##### `KeyJwkInput`<sup>Optional</sup> <a name="KeyJwkInput" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.keyJwkInput"></a>

```go
func KeyJwkInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NamespaceIdInput`<sup>Optional</sup> <a name="NamespaceIdInput" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.namespaceIdInput"></a>

```go
func NamespaceIdInput() *string
```

- *Type:* *string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.namespaceInput"></a>

```go
func NamespaceInput() *string
```

- *Type:* *string

---

##### `OldNameInput`<sup>Optional</sup> <a name="OldNameInput" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.oldNameInput"></a>

```go
func OldNameInput() *string
```

- *Type:* *string

---

##### `OutboundInput`<sup>Optional</sup> <a name="OutboundInput" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.outboundInput"></a>

```go
func OutboundInput() interface{}
```

- *Type:* interface{}

---

##### `PartInput`<sup>Optional</sup> <a name="PartInput" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.partInput"></a>

```go
func PartInput() *string
```

- *Type:* *string

---

##### `PipelineInput`<sup>Optional</sup> <a name="PipelineInput" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.pipelineInput"></a>

```go
func PipelineInput() *string
```

- *Type:* *string

---

##### `QueueNameInput`<sup>Optional</sup> <a name="QueueNameInput" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.queueNameInput"></a>

```go
func QueueNameInput() *string
```

- *Type:* *string

---

##### `ScriptNameInput`<sup>Optional</sup> <a name="ScriptNameInput" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.scriptNameInput"></a>

```go
func ScriptNameInput() *string
```

- *Type:* *string

---

##### `SecretNameInput`<sup>Optional</sup> <a name="SecretNameInput" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.secretNameInput"></a>

```go
func SecretNameInput() *string
```

- *Type:* *string

---

##### `ServiceInput`<sup>Optional</sup> <a name="ServiceInput" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.serviceInput"></a>

```go
func ServiceInput() *string
```

- *Type:* *string

---

##### `StoreIdInput`<sup>Optional</sup> <a name="StoreIdInput" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.storeIdInput"></a>

```go
func StoreIdInput() *string
```

- *Type:* *string

---

##### `TextInput`<sup>Optional</sup> <a name="TextInput" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.textInput"></a>

```go
func TextInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `UsagesInput`<sup>Optional</sup> <a name="UsagesInput" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.usagesInput"></a>

```go
func UsagesInput() *[]*string
```

- *Type:* *[]*string

---

##### `VersionIdInput`<sup>Optional</sup> <a name="VersionIdInput" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.versionIdInput"></a>

```go
func VersionIdInput() *string
```

- *Type:* *string

---

##### `WorkflowNameInput`<sup>Optional</sup> <a name="WorkflowNameInput" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.workflowNameInput"></a>

```go
func WorkflowNameInput() *string
```

- *Type:* *string

---

##### `Algorithm`<sup>Required</sup> <a name="Algorithm" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.algorithm"></a>

```go
func Algorithm() *string
```

- *Type:* *string

---

##### `AllowedDestinationAddresses`<sup>Required</sup> <a name="AllowedDestinationAddresses" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.allowedDestinationAddresses"></a>

```go
func AllowedDestinationAddresses() *[]*string
```

- *Type:* *[]*string

---

##### `AllowedSenderAddresses`<sup>Required</sup> <a name="AllowedSenderAddresses" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.allowedSenderAddresses"></a>

```go
func AllowedSenderAddresses() *[]*string
```

- *Type:* *[]*string

---

##### `BucketName`<sup>Required</sup> <a name="BucketName" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.bucketName"></a>

```go
func BucketName() *string
```

- *Type:* *string

---

##### `CertificateId`<sup>Required</sup> <a name="CertificateId" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.certificateId"></a>

```go
func CertificateId() *string
```

- *Type:* *string

---

##### `ClassName`<sup>Required</sup> <a name="ClassName" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.className"></a>

```go
func ClassName() *string
```

- *Type:* *string

---

##### `Dataset`<sup>Required</sup> <a name="Dataset" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.dataset"></a>

```go
func Dataset() *string
```

- *Type:* *string

---

##### `DestinationAddress`<sup>Required</sup> <a name="DestinationAddress" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.destinationAddress"></a>

```go
func DestinationAddress() *string
```

- *Type:* *string

---

##### `Environment`<sup>Required</sup> <a name="Environment" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.environment"></a>

```go
func Environment() *string
```

- *Type:* *string

---

##### `Format`<sup>Required</sup> <a name="Format" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.format"></a>

```go
func Format() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IndexName`<sup>Required</sup> <a name="IndexName" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.indexName"></a>

```go
func IndexName() *string
```

- *Type:* *string

---

##### `Json`<sup>Required</sup> <a name="Json" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.json"></a>

```go
func Json() *string
```

- *Type:* *string

---

##### `Jurisdiction`<sup>Required</sup> <a name="Jurisdiction" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.jurisdiction"></a>

```go
func Jurisdiction() *string
```

- *Type:* *string

---

##### `KeyBase64`<sup>Required</sup> <a name="KeyBase64" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.keyBase64"></a>

```go
func KeyBase64() *string
```

- *Type:* *string

---

##### `KeyJwk`<sup>Required</sup> <a name="KeyJwk" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.keyJwk"></a>

```go
func KeyJwk() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `NamespaceId`<sup>Required</sup> <a name="NamespaceId" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.namespaceId"></a>

```go
func NamespaceId() *string
```

- *Type:* *string

---

##### `OldName`<sup>Required</sup> <a name="OldName" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.oldName"></a>

```go
func OldName() *string
```

- *Type:* *string

---

##### `Part`<sup>Required</sup> <a name="Part" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.part"></a>

```go
func Part() *string
```

- *Type:* *string

---

##### `Pipeline`<sup>Required</sup> <a name="Pipeline" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.pipeline"></a>

```go
func Pipeline() *string
```

- *Type:* *string

---

##### `QueueName`<sup>Required</sup> <a name="QueueName" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.queueName"></a>

```go
func QueueName() *string
```

- *Type:* *string

---

##### `ScriptName`<sup>Required</sup> <a name="ScriptName" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.scriptName"></a>

```go
func ScriptName() *string
```

- *Type:* *string

---

##### `SecretName`<sup>Required</sup> <a name="SecretName" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.secretName"></a>

```go
func SecretName() *string
```

- *Type:* *string

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.service"></a>

```go
func Service() *string
```

- *Type:* *string

---

##### `StoreId`<sup>Required</sup> <a name="StoreId" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.storeId"></a>

```go
func StoreId() *string
```

- *Type:* *string

---

##### `Text`<sup>Required</sup> <a name="Text" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.text"></a>

```go
func Text() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `Usages`<sup>Required</sup> <a name="Usages" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.usages"></a>

```go
func Usages() *[]*string
```

- *Type:* *[]*string

---

##### `VersionId`<sup>Required</sup> <a name="VersionId" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.versionId"></a>

```go
func VersionId() *string
```

- *Type:* *string

---

##### `WorkflowName`<sup>Required</sup> <a name="WorkflowName" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.workflowName"></a>

```go
func WorkflowName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### WorkersScriptLimitsOutputReference <a name="WorkersScriptLimitsOutputReference" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptLimitsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptLimitsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/workersscript"

workersscript.NewWorkersScriptLimitsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) WorkersScriptLimitsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptLimitsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptLimitsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptLimitsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptLimitsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptLimitsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptLimitsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptLimitsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptLimitsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptLimitsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptLimitsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptLimitsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptLimitsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptLimitsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptLimitsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptLimitsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptLimitsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptLimitsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptLimitsOutputReference.resetCpuMs">ResetCpuMs</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptLimitsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptLimitsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptLimitsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptLimitsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptLimitsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptLimitsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptLimitsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptLimitsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptLimitsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptLimitsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptLimitsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptLimitsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptLimitsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptLimitsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptLimitsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptLimitsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptLimitsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptLimitsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptLimitsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptLimitsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptLimitsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptLimitsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptLimitsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptLimitsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCpuMs` <a name="ResetCpuMs" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptLimitsOutputReference.resetCpuMs"></a>

```go
func ResetCpuMs()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptLimitsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptLimitsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptLimitsOutputReference.property.cpuMsInput">CpuMsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptLimitsOutputReference.property.cpuMs">CpuMs</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptLimitsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptLimitsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptLimitsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CpuMsInput`<sup>Optional</sup> <a name="CpuMsInput" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptLimitsOutputReference.property.cpuMsInput"></a>

```go
func CpuMsInput() *f64
```

- *Type:* *f64

---

##### `CpuMs`<sup>Required</sup> <a name="CpuMs" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptLimitsOutputReference.property.cpuMs"></a>

```go
func CpuMs() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptLimitsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### WorkersScriptMigrationsOutputReference <a name="WorkersScriptMigrationsOutputReference" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/workersscript"

workersscript.NewWorkersScriptMigrationsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) WorkersScriptMigrationsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.putRenamedClasses">PutRenamedClasses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.putSteps">PutSteps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.putTransferredClasses">PutTransferredClasses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.resetDeletedClasses">ResetDeletedClasses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.resetNewClasses">ResetNewClasses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.resetNewSqliteClasses">ResetNewSqliteClasses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.resetNewTag">ResetNewTag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.resetOldTag">ResetOldTag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.resetRenamedClasses">ResetRenamedClasses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.resetSteps">ResetSteps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.resetTransferredClasses">ResetTransferredClasses</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRenamedClasses` <a name="PutRenamedClasses" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.putRenamedClasses"></a>

```go
func PutRenamedClasses(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.putRenamedClasses.parameter.value"></a>

- *Type:* interface{}

---

##### `PutSteps` <a name="PutSteps" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.putSteps"></a>

```go
func PutSteps(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.putSteps.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTransferredClasses` <a name="PutTransferredClasses" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.putTransferredClasses"></a>

```go
func PutTransferredClasses(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.putTransferredClasses.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDeletedClasses` <a name="ResetDeletedClasses" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.resetDeletedClasses"></a>

```go
func ResetDeletedClasses()
```

##### `ResetNewClasses` <a name="ResetNewClasses" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.resetNewClasses"></a>

```go
func ResetNewClasses()
```

##### `ResetNewSqliteClasses` <a name="ResetNewSqliteClasses" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.resetNewSqliteClasses"></a>

```go
func ResetNewSqliteClasses()
```

##### `ResetNewTag` <a name="ResetNewTag" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.resetNewTag"></a>

```go
func ResetNewTag()
```

##### `ResetOldTag` <a name="ResetOldTag" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.resetOldTag"></a>

```go
func ResetOldTag()
```

##### `ResetRenamedClasses` <a name="ResetRenamedClasses" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.resetRenamedClasses"></a>

```go
func ResetRenamedClasses()
```

##### `ResetSteps` <a name="ResetSteps" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.resetSteps"></a>

```go
func ResetSteps()
```

##### `ResetTransferredClasses` <a name="ResetTransferredClasses" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.resetTransferredClasses"></a>

```go
func ResetTransferredClasses()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.property.renamedClasses">RenamedClasses</a></code> | <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesList">WorkersScriptMigrationsRenamedClassesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.property.steps">Steps</a></code> | <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsList">WorkersScriptMigrationsStepsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.property.transferredClasses">TransferredClasses</a></code> | <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesList">WorkersScriptMigrationsTransferredClassesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.property.deletedClassesInput">DeletedClassesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.property.newClassesInput">NewClassesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.property.newSqliteClassesInput">NewSqliteClassesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.property.newTagInput">NewTagInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.property.oldTagInput">OldTagInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.property.renamedClassesInput">RenamedClassesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.property.stepsInput">StepsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.property.transferredClassesInput">TransferredClassesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.property.deletedClasses">DeletedClasses</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.property.newClasses">NewClasses</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.property.newSqliteClasses">NewSqliteClasses</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.property.newTag">NewTag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.property.oldTag">OldTag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RenamedClasses`<sup>Required</sup> <a name="RenamedClasses" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.property.renamedClasses"></a>

```go
func RenamedClasses() WorkersScriptMigrationsRenamedClassesList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesList">WorkersScriptMigrationsRenamedClassesList</a>

---

##### `Steps`<sup>Required</sup> <a name="Steps" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.property.steps"></a>

```go
func Steps() WorkersScriptMigrationsStepsList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsList">WorkersScriptMigrationsStepsList</a>

---

##### `TransferredClasses`<sup>Required</sup> <a name="TransferredClasses" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.property.transferredClasses"></a>

```go
func TransferredClasses() WorkersScriptMigrationsTransferredClassesList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesList">WorkersScriptMigrationsTransferredClassesList</a>

---

##### `DeletedClassesInput`<sup>Optional</sup> <a name="DeletedClassesInput" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.property.deletedClassesInput"></a>

```go
func DeletedClassesInput() *[]*string
```

- *Type:* *[]*string

---

##### `NewClassesInput`<sup>Optional</sup> <a name="NewClassesInput" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.property.newClassesInput"></a>

```go
func NewClassesInput() *[]*string
```

- *Type:* *[]*string

---

##### `NewSqliteClassesInput`<sup>Optional</sup> <a name="NewSqliteClassesInput" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.property.newSqliteClassesInput"></a>

```go
func NewSqliteClassesInput() *[]*string
```

- *Type:* *[]*string

---

##### `NewTagInput`<sup>Optional</sup> <a name="NewTagInput" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.property.newTagInput"></a>

```go
func NewTagInput() *string
```

- *Type:* *string

---

##### `OldTagInput`<sup>Optional</sup> <a name="OldTagInput" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.property.oldTagInput"></a>

```go
func OldTagInput() *string
```

- *Type:* *string

---

##### `RenamedClassesInput`<sup>Optional</sup> <a name="RenamedClassesInput" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.property.renamedClassesInput"></a>

```go
func RenamedClassesInput() interface{}
```

- *Type:* interface{}

---

##### `StepsInput`<sup>Optional</sup> <a name="StepsInput" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.property.stepsInput"></a>

```go
func StepsInput() interface{}
```

- *Type:* interface{}

---

##### `TransferredClassesInput`<sup>Optional</sup> <a name="TransferredClassesInput" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.property.transferredClassesInput"></a>

```go
func TransferredClassesInput() interface{}
```

- *Type:* interface{}

---

##### `DeletedClasses`<sup>Required</sup> <a name="DeletedClasses" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.property.deletedClasses"></a>

```go
func DeletedClasses() *[]*string
```

- *Type:* *[]*string

---

##### `NewClasses`<sup>Required</sup> <a name="NewClasses" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.property.newClasses"></a>

```go
func NewClasses() *[]*string
```

- *Type:* *[]*string

---

##### `NewSqliteClasses`<sup>Required</sup> <a name="NewSqliteClasses" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.property.newSqliteClasses"></a>

```go
func NewSqliteClasses() *[]*string
```

- *Type:* *[]*string

---

##### `NewTag`<sup>Required</sup> <a name="NewTag" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.property.newTag"></a>

```go
func NewTag() *string
```

- *Type:* *string

---

##### `OldTag`<sup>Required</sup> <a name="OldTag" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.property.oldTag"></a>

```go
func OldTag() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### WorkersScriptMigrationsRenamedClassesList <a name="WorkersScriptMigrationsRenamedClassesList" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/workersscript"

workersscript.NewWorkersScriptMigrationsRenamedClassesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) WorkersScriptMigrationsRenamedClassesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesList.get"></a>

```go
func Get(index *f64) WorkersScriptMigrationsRenamedClassesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### WorkersScriptMigrationsRenamedClassesOutputReference <a name="WorkersScriptMigrationsRenamedClassesOutputReference" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/workersscript"

workersscript.NewWorkersScriptMigrationsRenamedClassesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) WorkersScriptMigrationsRenamedClassesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesOutputReference.resetFrom">ResetFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesOutputReference.resetTo">ResetTo</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFrom` <a name="ResetFrom" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesOutputReference.resetFrom"></a>

```go
func ResetFrom()
```

##### `ResetTo` <a name="ResetTo" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesOutputReference.resetTo"></a>

```go
func ResetTo()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesOutputReference.property.fromInput">FromInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesOutputReference.property.toInput">ToInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesOutputReference.property.from">From</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesOutputReference.property.to">To</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FromInput`<sup>Optional</sup> <a name="FromInput" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesOutputReference.property.fromInput"></a>

```go
func FromInput() *string
```

- *Type:* *string

---

##### `ToInput`<sup>Optional</sup> <a name="ToInput" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesOutputReference.property.toInput"></a>

```go
func ToInput() *string
```

- *Type:* *string

---

##### `From`<sup>Required</sup> <a name="From" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesOutputReference.property.from"></a>

```go
func From() *string
```

- *Type:* *string

---

##### `To`<sup>Required</sup> <a name="To" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesOutputReference.property.to"></a>

```go
func To() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### WorkersScriptMigrationsStepsList <a name="WorkersScriptMigrationsStepsList" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/workersscript"

workersscript.NewWorkersScriptMigrationsStepsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) WorkersScriptMigrationsStepsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsList.get"></a>

```go
func Get(index *f64) WorkersScriptMigrationsStepsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### WorkersScriptMigrationsStepsOutputReference <a name="WorkersScriptMigrationsStepsOutputReference" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/workersscript"

workersscript.NewWorkersScriptMigrationsStepsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) WorkersScriptMigrationsStepsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.putRenamedClasses">PutRenamedClasses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.putTransferredClasses">PutTransferredClasses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.resetDeletedClasses">ResetDeletedClasses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.resetNewClasses">ResetNewClasses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.resetNewSqliteClasses">ResetNewSqliteClasses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.resetRenamedClasses">ResetRenamedClasses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.resetTransferredClasses">ResetTransferredClasses</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRenamedClasses` <a name="PutRenamedClasses" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.putRenamedClasses"></a>

```go
func PutRenamedClasses(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.putRenamedClasses.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTransferredClasses` <a name="PutTransferredClasses" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.putTransferredClasses"></a>

```go
func PutTransferredClasses(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.putTransferredClasses.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDeletedClasses` <a name="ResetDeletedClasses" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.resetDeletedClasses"></a>

```go
func ResetDeletedClasses()
```

##### `ResetNewClasses` <a name="ResetNewClasses" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.resetNewClasses"></a>

```go
func ResetNewClasses()
```

##### `ResetNewSqliteClasses` <a name="ResetNewSqliteClasses" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.resetNewSqliteClasses"></a>

```go
func ResetNewSqliteClasses()
```

##### `ResetRenamedClasses` <a name="ResetRenamedClasses" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.resetRenamedClasses"></a>

```go
func ResetRenamedClasses()
```

##### `ResetTransferredClasses` <a name="ResetTransferredClasses" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.resetTransferredClasses"></a>

```go
func ResetTransferredClasses()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.property.renamedClasses">RenamedClasses</a></code> | <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesList">WorkersScriptMigrationsStepsRenamedClassesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.property.transferredClasses">TransferredClasses</a></code> | <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesList">WorkersScriptMigrationsStepsTransferredClassesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.property.deletedClassesInput">DeletedClassesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.property.newClassesInput">NewClassesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.property.newSqliteClassesInput">NewSqliteClassesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.property.renamedClassesInput">RenamedClassesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.property.transferredClassesInput">TransferredClassesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.property.deletedClasses">DeletedClasses</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.property.newClasses">NewClasses</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.property.newSqliteClasses">NewSqliteClasses</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RenamedClasses`<sup>Required</sup> <a name="RenamedClasses" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.property.renamedClasses"></a>

```go
func RenamedClasses() WorkersScriptMigrationsStepsRenamedClassesList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesList">WorkersScriptMigrationsStepsRenamedClassesList</a>

---

##### `TransferredClasses`<sup>Required</sup> <a name="TransferredClasses" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.property.transferredClasses"></a>

```go
func TransferredClasses() WorkersScriptMigrationsStepsTransferredClassesList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesList">WorkersScriptMigrationsStepsTransferredClassesList</a>

---

##### `DeletedClassesInput`<sup>Optional</sup> <a name="DeletedClassesInput" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.property.deletedClassesInput"></a>

```go
func DeletedClassesInput() *[]*string
```

- *Type:* *[]*string

---

##### `NewClassesInput`<sup>Optional</sup> <a name="NewClassesInput" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.property.newClassesInput"></a>

```go
func NewClassesInput() *[]*string
```

- *Type:* *[]*string

---

##### `NewSqliteClassesInput`<sup>Optional</sup> <a name="NewSqliteClassesInput" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.property.newSqliteClassesInput"></a>

```go
func NewSqliteClassesInput() *[]*string
```

- *Type:* *[]*string

---

##### `RenamedClassesInput`<sup>Optional</sup> <a name="RenamedClassesInput" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.property.renamedClassesInput"></a>

```go
func RenamedClassesInput() interface{}
```

- *Type:* interface{}

---

##### `TransferredClassesInput`<sup>Optional</sup> <a name="TransferredClassesInput" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.property.transferredClassesInput"></a>

```go
func TransferredClassesInput() interface{}
```

- *Type:* interface{}

---

##### `DeletedClasses`<sup>Required</sup> <a name="DeletedClasses" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.property.deletedClasses"></a>

```go
func DeletedClasses() *[]*string
```

- *Type:* *[]*string

---

##### `NewClasses`<sup>Required</sup> <a name="NewClasses" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.property.newClasses"></a>

```go
func NewClasses() *[]*string
```

- *Type:* *[]*string

---

##### `NewSqliteClasses`<sup>Required</sup> <a name="NewSqliteClasses" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.property.newSqliteClasses"></a>

```go
func NewSqliteClasses() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### WorkersScriptMigrationsStepsRenamedClassesList <a name="WorkersScriptMigrationsStepsRenamedClassesList" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/workersscript"

workersscript.NewWorkersScriptMigrationsStepsRenamedClassesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) WorkersScriptMigrationsStepsRenamedClassesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesList.get"></a>

```go
func Get(index *f64) WorkersScriptMigrationsStepsRenamedClassesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### WorkersScriptMigrationsStepsRenamedClassesOutputReference <a name="WorkersScriptMigrationsStepsRenamedClassesOutputReference" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/workersscript"

workersscript.NewWorkersScriptMigrationsStepsRenamedClassesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) WorkersScriptMigrationsStepsRenamedClassesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesOutputReference.resetFrom">ResetFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesOutputReference.resetTo">ResetTo</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFrom` <a name="ResetFrom" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesOutputReference.resetFrom"></a>

```go
func ResetFrom()
```

##### `ResetTo` <a name="ResetTo" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesOutputReference.resetTo"></a>

```go
func ResetTo()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesOutputReference.property.fromInput">FromInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesOutputReference.property.toInput">ToInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesOutputReference.property.from">From</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesOutputReference.property.to">To</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FromInput`<sup>Optional</sup> <a name="FromInput" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesOutputReference.property.fromInput"></a>

```go
func FromInput() *string
```

- *Type:* *string

---

##### `ToInput`<sup>Optional</sup> <a name="ToInput" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesOutputReference.property.toInput"></a>

```go
func ToInput() *string
```

- *Type:* *string

---

##### `From`<sup>Required</sup> <a name="From" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesOutputReference.property.from"></a>

```go
func From() *string
```

- *Type:* *string

---

##### `To`<sup>Required</sup> <a name="To" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesOutputReference.property.to"></a>

```go
func To() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### WorkersScriptMigrationsStepsTransferredClassesList <a name="WorkersScriptMigrationsStepsTransferredClassesList" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/workersscript"

workersscript.NewWorkersScriptMigrationsStepsTransferredClassesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) WorkersScriptMigrationsStepsTransferredClassesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesList.get"></a>

```go
func Get(index *f64) WorkersScriptMigrationsStepsTransferredClassesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### WorkersScriptMigrationsStepsTransferredClassesOutputReference <a name="WorkersScriptMigrationsStepsTransferredClassesOutputReference" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/workersscript"

workersscript.NewWorkersScriptMigrationsStepsTransferredClassesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) WorkersScriptMigrationsStepsTransferredClassesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.resetFrom">ResetFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.resetFromScript">ResetFromScript</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.resetTo">ResetTo</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFrom` <a name="ResetFrom" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.resetFrom"></a>

```go
func ResetFrom()
```

##### `ResetFromScript` <a name="ResetFromScript" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.resetFromScript"></a>

```go
func ResetFromScript()
```

##### `ResetTo` <a name="ResetTo" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.resetTo"></a>

```go
func ResetTo()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.property.fromInput">FromInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.property.fromScriptInput">FromScriptInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.property.toInput">ToInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.property.from">From</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.property.fromScript">FromScript</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.property.to">To</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FromInput`<sup>Optional</sup> <a name="FromInput" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.property.fromInput"></a>

```go
func FromInput() *string
```

- *Type:* *string

---

##### `FromScriptInput`<sup>Optional</sup> <a name="FromScriptInput" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.property.fromScriptInput"></a>

```go
func FromScriptInput() *string
```

- *Type:* *string

---

##### `ToInput`<sup>Optional</sup> <a name="ToInput" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.property.toInput"></a>

```go
func ToInput() *string
```

- *Type:* *string

---

##### `From`<sup>Required</sup> <a name="From" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.property.from"></a>

```go
func From() *string
```

- *Type:* *string

---

##### `FromScript`<sup>Required</sup> <a name="FromScript" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.property.fromScript"></a>

```go
func FromScript() *string
```

- *Type:* *string

---

##### `To`<sup>Required</sup> <a name="To" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.property.to"></a>

```go
func To() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### WorkersScriptMigrationsTransferredClassesList <a name="WorkersScriptMigrationsTransferredClassesList" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/workersscript"

workersscript.NewWorkersScriptMigrationsTransferredClassesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) WorkersScriptMigrationsTransferredClassesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesList.get"></a>

```go
func Get(index *f64) WorkersScriptMigrationsTransferredClassesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### WorkersScriptMigrationsTransferredClassesOutputReference <a name="WorkersScriptMigrationsTransferredClassesOutputReference" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/workersscript"

workersscript.NewWorkersScriptMigrationsTransferredClassesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) WorkersScriptMigrationsTransferredClassesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.resetFrom">ResetFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.resetFromScript">ResetFromScript</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.resetTo">ResetTo</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFrom` <a name="ResetFrom" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.resetFrom"></a>

```go
func ResetFrom()
```

##### `ResetFromScript` <a name="ResetFromScript" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.resetFromScript"></a>

```go
func ResetFromScript()
```

##### `ResetTo` <a name="ResetTo" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.resetTo"></a>

```go
func ResetTo()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.property.fromInput">FromInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.property.fromScriptInput">FromScriptInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.property.toInput">ToInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.property.from">From</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.property.fromScript">FromScript</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.property.to">To</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FromInput`<sup>Optional</sup> <a name="FromInput" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.property.fromInput"></a>

```go
func FromInput() *string
```

- *Type:* *string

---

##### `FromScriptInput`<sup>Optional</sup> <a name="FromScriptInput" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.property.fromScriptInput"></a>

```go
func FromScriptInput() *string
```

- *Type:* *string

---

##### `ToInput`<sup>Optional</sup> <a name="ToInput" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.property.toInput"></a>

```go
func ToInput() *string
```

- *Type:* *string

---

##### `From`<sup>Required</sup> <a name="From" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.property.from"></a>

```go
func From() *string
```

- *Type:* *string

---

##### `FromScript`<sup>Required</sup> <a name="FromScript" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.property.fromScript"></a>

```go
func FromScript() *string
```

- *Type:* *string

---

##### `To`<sup>Required</sup> <a name="To" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.property.to"></a>

```go
func To() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### WorkersScriptNamedHandlersList <a name="WorkersScriptNamedHandlersList" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptNamedHandlersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptNamedHandlersList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/workersscript"

workersscript.NewWorkersScriptNamedHandlersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) WorkersScriptNamedHandlersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptNamedHandlersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptNamedHandlersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptNamedHandlersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptNamedHandlersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptNamedHandlersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptNamedHandlersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptNamedHandlersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptNamedHandlersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptNamedHandlersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptNamedHandlersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptNamedHandlersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptNamedHandlersList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptNamedHandlersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptNamedHandlersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptNamedHandlersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptNamedHandlersList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptNamedHandlersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptNamedHandlersList.get"></a>

```go
func Get(index *f64) WorkersScriptNamedHandlersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptNamedHandlersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptNamedHandlersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptNamedHandlersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptNamedHandlersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptNamedHandlersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### WorkersScriptNamedHandlersOutputReference <a name="WorkersScriptNamedHandlersOutputReference" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptNamedHandlersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptNamedHandlersOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/workersscript"

workersscript.NewWorkersScriptNamedHandlersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) WorkersScriptNamedHandlersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptNamedHandlersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptNamedHandlersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptNamedHandlersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptNamedHandlersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptNamedHandlersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptNamedHandlersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptNamedHandlersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptNamedHandlersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptNamedHandlersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptNamedHandlersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptNamedHandlersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptNamedHandlersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptNamedHandlersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptNamedHandlersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptNamedHandlersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptNamedHandlersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptNamedHandlersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptNamedHandlersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptNamedHandlersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptNamedHandlersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptNamedHandlersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptNamedHandlersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptNamedHandlersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptNamedHandlersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptNamedHandlersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptNamedHandlersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptNamedHandlersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptNamedHandlersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptNamedHandlersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptNamedHandlersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptNamedHandlersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptNamedHandlersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptNamedHandlersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptNamedHandlersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptNamedHandlersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptNamedHandlersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptNamedHandlersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptNamedHandlersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptNamedHandlersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptNamedHandlersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptNamedHandlersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptNamedHandlersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptNamedHandlersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptNamedHandlersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptNamedHandlersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptNamedHandlersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptNamedHandlersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptNamedHandlersOutputReference.property.handlers">Handlers</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptNamedHandlersOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptNamedHandlersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptNamedHandlers">WorkersScriptNamedHandlers</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptNamedHandlersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptNamedHandlersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Handlers`<sup>Required</sup> <a name="Handlers" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptNamedHandlersOutputReference.property.handlers"></a>

```go
func Handlers() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptNamedHandlersOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptNamedHandlersOutputReference.property.internalValue"></a>

```go
func InternalValue() WorkersScriptNamedHandlers
```

- *Type:* <a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptNamedHandlers">WorkersScriptNamedHandlers</a>

---


### WorkersScriptObservabilityLogsOutputReference <a name="WorkersScriptObservabilityLogsOutputReference" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/workersscript"

workersscript.NewWorkersScriptObservabilityLogsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) WorkersScriptObservabilityLogsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.resetDestinations">ResetDestinations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.resetHeadSamplingRate">ResetHeadSamplingRate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.resetPersist">ResetPersist</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDestinations` <a name="ResetDestinations" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.resetDestinations"></a>

```go
func ResetDestinations()
```

##### `ResetHeadSamplingRate` <a name="ResetHeadSamplingRate" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.resetHeadSamplingRate"></a>

```go
func ResetHeadSamplingRate()
```

##### `ResetPersist` <a name="ResetPersist" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.resetPersist"></a>

```go
func ResetPersist()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.property.destinationsInput">DestinationsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.property.headSamplingRateInput">HeadSamplingRateInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.property.invocationLogsInput">InvocationLogsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.property.persistInput">PersistInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.property.destinations">Destinations</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.property.headSamplingRate">HeadSamplingRate</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.property.invocationLogs">InvocationLogs</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.property.persist">Persist</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DestinationsInput`<sup>Optional</sup> <a name="DestinationsInput" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.property.destinationsInput"></a>

```go
func DestinationsInput() *[]*string
```

- *Type:* *[]*string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `HeadSamplingRateInput`<sup>Optional</sup> <a name="HeadSamplingRateInput" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.property.headSamplingRateInput"></a>

```go
func HeadSamplingRateInput() *f64
```

- *Type:* *f64

---

##### `InvocationLogsInput`<sup>Optional</sup> <a name="InvocationLogsInput" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.property.invocationLogsInput"></a>

```go
func InvocationLogsInput() interface{}
```

- *Type:* interface{}

---

##### `PersistInput`<sup>Optional</sup> <a name="PersistInput" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.property.persistInput"></a>

```go
func PersistInput() interface{}
```

- *Type:* interface{}

---

##### `Destinations`<sup>Required</sup> <a name="Destinations" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.property.destinations"></a>

```go
func Destinations() *[]*string
```

- *Type:* *[]*string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `HeadSamplingRate`<sup>Required</sup> <a name="HeadSamplingRate" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.property.headSamplingRate"></a>

```go
func HeadSamplingRate() *f64
```

- *Type:* *f64

---

##### `InvocationLogs`<sup>Required</sup> <a name="InvocationLogs" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.property.invocationLogs"></a>

```go
func InvocationLogs() interface{}
```

- *Type:* interface{}

---

##### `Persist`<sup>Required</sup> <a name="Persist" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.property.persist"></a>

```go
func Persist() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### WorkersScriptObservabilityOutputReference <a name="WorkersScriptObservabilityOutputReference" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/workersscript"

workersscript.NewWorkersScriptObservabilityOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) WorkersScriptObservabilityOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.putLogs">PutLogs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.resetHeadSamplingRate">ResetHeadSamplingRate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.resetLogs">ResetLogs</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutLogs` <a name="PutLogs" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.putLogs"></a>

```go
func PutLogs(value WorkersScriptObservabilityLogs)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.putLogs.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogs">WorkersScriptObservabilityLogs</a>

---

##### `ResetHeadSamplingRate` <a name="ResetHeadSamplingRate" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.resetHeadSamplingRate"></a>

```go
func ResetHeadSamplingRate()
```

##### `ResetLogs` <a name="ResetLogs" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.resetLogs"></a>

```go
func ResetLogs()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.property.logs">Logs</a></code> | <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference">WorkersScriptObservabilityLogsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.property.headSamplingRateInput">HeadSamplingRateInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.property.logsInput">LogsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.property.headSamplingRate">HeadSamplingRate</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Logs`<sup>Required</sup> <a name="Logs" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.property.logs"></a>

```go
func Logs() WorkersScriptObservabilityLogsOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference">WorkersScriptObservabilityLogsOutputReference</a>

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `HeadSamplingRateInput`<sup>Optional</sup> <a name="HeadSamplingRateInput" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.property.headSamplingRateInput"></a>

```go
func HeadSamplingRateInput() *f64
```

- *Type:* *f64

---

##### `LogsInput`<sup>Optional</sup> <a name="LogsInput" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.property.logsInput"></a>

```go
func LogsInput() interface{}
```

- *Type:* interface{}

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `HeadSamplingRate`<sup>Required</sup> <a name="HeadSamplingRate" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.property.headSamplingRate"></a>

```go
func HeadSamplingRate() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### WorkersScriptPlacementOutputReference <a name="WorkersScriptPlacementOutputReference" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacementOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/workersscript"

workersscript.NewWorkersScriptPlacementOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) WorkersScriptPlacementOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacementOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacementOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacementOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacementOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacementOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacementOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacementOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacementOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacementOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacementOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacementOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacementOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacementOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacementOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacementOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacementOutputReference.resetMode">ResetMode</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacementOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacementOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacementOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacementOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacementOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacementOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacementOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacementOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacementOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacementOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacementOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacementOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacementOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacementOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMode` <a name="ResetMode" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacementOutputReference.resetMode"></a>

```go
func ResetMode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacementOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacementOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacementOutputReference.property.lastAnalyzedAt">LastAnalyzedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacementOutputReference.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacementOutputReference.property.modeInput">ModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacementOutputReference.property.mode">Mode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacementOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacementOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacementOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LastAnalyzedAt`<sup>Required</sup> <a name="LastAnalyzedAt" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacementOutputReference.property.lastAnalyzedAt"></a>

```go
func LastAnalyzedAt() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacementOutputReference.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `ModeInput`<sup>Optional</sup> <a name="ModeInput" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacementOutputReference.property.modeInput"></a>

```go
func ModeInput() *string
```

- *Type:* *string

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacementOutputReference.property.mode"></a>

```go
func Mode() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacementOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### WorkersScriptTailConsumersList <a name="WorkersScriptTailConsumersList" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/workersscript"

workersscript.NewWorkersScriptTailConsumersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) WorkersScriptTailConsumersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersList.get"></a>

```go
func Get(index *f64) WorkersScriptTailConsumersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### WorkersScriptTailConsumersOutputReference <a name="WorkersScriptTailConsumersOutputReference" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/workersscript"

workersscript.NewWorkersScriptTailConsumersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) WorkersScriptTailConsumersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference.resetEnvironment">ResetEnvironment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference.resetNamespace">ResetNamespace</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnvironment` <a name="ResetEnvironment" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference.resetEnvironment"></a>

```go
func ResetEnvironment()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference.resetNamespace"></a>

```go
func ResetNamespace()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference.property.environmentInput">EnvironmentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference.property.namespaceInput">NamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference.property.serviceInput">ServiceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference.property.environment">Environment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference.property.service">Service</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EnvironmentInput`<sup>Optional</sup> <a name="EnvironmentInput" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference.property.environmentInput"></a>

```go
func EnvironmentInput() *string
```

- *Type:* *string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference.property.namespaceInput"></a>

```go
func NamespaceInput() *string
```

- *Type:* *string

---

##### `ServiceInput`<sup>Optional</sup> <a name="ServiceInput" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference.property.serviceInput"></a>

```go
func ServiceInput() *string
```

- *Type:* *string

---

##### `Environment`<sup>Required</sup> <a name="Environment" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference.property.environment"></a>

```go
func Environment() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference.property.service"></a>

```go
func Service() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



