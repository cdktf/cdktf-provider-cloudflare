# `zeroTrustDevicePostureIntegration` Submodule <a name="`zeroTrustDevicePostureIntegration` Submodule" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ZeroTrustDevicePostureIntegration <a name="ZeroTrustDevicePostureIntegration" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/zero_trust_device_posture_integration cloudflare_zero_trust_device_posture_integration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/zerotrustdevicepostureintegration"

zerotrustdevicepostureintegration.NewZeroTrustDevicePostureIntegration(scope Construct, id *string, config ZeroTrustDevicePostureIntegrationConfig) ZeroTrustDevicePostureIntegration
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfig">ZeroTrustDevicePostureIntegrationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfig">ZeroTrustDevicePostureIntegrationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.putConfig">PutConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.resetConfig">ResetConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.resetIdentifier">ResetIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.resetInterval">ResetInterval</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutConfig` <a name="PutConfig" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.putConfig"></a>

```go
func PutConfig(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.putConfig.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetConfig` <a name="ResetConfig" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.resetConfig"></a>

```go
func ResetConfig()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.resetId"></a>

```go
func ResetId()
```

##### `ResetIdentifier` <a name="ResetIdentifier" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.resetIdentifier"></a>

```go
func ResetIdentifier()
```

##### `ResetInterval` <a name="ResetInterval" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.resetInterval"></a>

```go
func ResetInterval()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ZeroTrustDevicePostureIntegration resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/zerotrustdevicepostureintegration"

zerotrustdevicepostureintegration.ZeroTrustDevicePostureIntegration_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/zerotrustdevicepostureintegration"

zerotrustdevicepostureintegration.ZeroTrustDevicePostureIntegration_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/zerotrustdevicepostureintegration"

zerotrustdevicepostureintegration.ZeroTrustDevicePostureIntegration_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/zerotrustdevicepostureintegration"

zerotrustdevicepostureintegration.ZeroTrustDevicePostureIntegration_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a ZeroTrustDevicePostureIntegration resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ZeroTrustDevicePostureIntegration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ZeroTrustDevicePostureIntegration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/zero_trust_device_posture_integration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the ZeroTrustDevicePostureIntegration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.property.config">Config</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigAList">ZeroTrustDevicePostureIntegrationConfigAList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.property.accountIdInput">AccountIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.property.configInput">ConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.property.identifierInput">IdentifierInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.property.intervalInput">IntervalInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.property.accountId">AccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.property.identifier">Identifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.property.interval">Interval</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.property.type">Type</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.property.config"></a>

```go
func Config() ZeroTrustDevicePostureIntegrationConfigAList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigAList">ZeroTrustDevicePostureIntegrationConfigAList</a>

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.property.accountIdInput"></a>

```go
func AccountIdInput() *string
```

- *Type:* *string

---

##### `ConfigInput`<sup>Optional</sup> <a name="ConfigInput" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.property.configInput"></a>

```go
func ConfigInput() interface{}
```

- *Type:* interface{}

---

##### `IdentifierInput`<sup>Optional</sup> <a name="IdentifierInput" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.property.identifierInput"></a>

```go
func IdentifierInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IntervalInput`<sup>Optional</sup> <a name="IntervalInput" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.property.intervalInput"></a>

```go
func IntervalInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.property.accountId"></a>

```go
func AccountId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Identifier`<sup>Required</sup> <a name="Identifier" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.property.identifier"></a>

```go
func Identifier() *string
```

- *Type:* *string

---

##### `Interval`<sup>Required</sup> <a name="Interval" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.property.interval"></a>

```go
func Interval() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ZeroTrustDevicePostureIntegrationConfig <a name="ZeroTrustDevicePostureIntegrationConfig" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/zerotrustdevicepostureintegration"

&zerotrustdevicepostureintegration.ZeroTrustDevicePostureIntegrationConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	AccountId: *string,
	Name: *string,
	Type: *string,
	Config: interface{},
	Id: *string,
	Identifier: *string,
	Interval: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfig.property.accountId">AccountId</a></code> | <code>*string</code> | The account identifier to target for the resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfig.property.name">Name</a></code> | <code>*string</code> | Name of the device posture integration. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfig.property.type">Type</a></code> | <code>*string</code> | The device posture integration type. Available values: `workspace_one`, `uptycs`, `crowdstrike_s2s`, `intune`, `kolide`, `sentinelone_s2s`, `tanium_s2s`, `custom_s2s`. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfig.property.config">Config</a></code> | <code>interface{}</code> | config block. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/zero_trust_device_posture_integration#id ZeroTrustDevicePostureIntegration#id}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfig.property.identifier">Identifier</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/zero_trust_device_posture_integration#identifier ZeroTrustDevicePostureIntegration#identifier}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfig.property.interval">Interval</a></code> | <code>*string</code> | Indicates the frequency with which to poll the third-party API. Must be in the format `1h` or `30m`. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfig.property.accountId"></a>

```go
AccountId *string
```

- *Type:* *string

The account identifier to target for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/zero_trust_device_posture_integration#account_id ZeroTrustDevicePostureIntegration#account_id}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of the device posture integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/zero_trust_device_posture_integration#name ZeroTrustDevicePostureIntegration#name}

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfig.property.type"></a>

```go
Type *string
```

- *Type:* *string

The device posture integration type. Available values: `workspace_one`, `uptycs`, `crowdstrike_s2s`, `intune`, `kolide`, `sentinelone_s2s`, `tanium_s2s`, `custom_s2s`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/zero_trust_device_posture_integration#type ZeroTrustDevicePostureIntegration#type}

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfig.property.config"></a>

```go
Config interface{}
```

- *Type:* interface{}

config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/zero_trust_device_posture_integration#config ZeroTrustDevicePostureIntegration#config}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/zero_trust_device_posture_integration#id ZeroTrustDevicePostureIntegration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Identifier`<sup>Optional</sup> <a name="Identifier" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfig.property.identifier"></a>

```go
Identifier *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/zero_trust_device_posture_integration#identifier ZeroTrustDevicePostureIntegration#identifier}.

---

##### `Interval`<sup>Optional</sup> <a name="Interval" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfig.property.interval"></a>

```go
Interval *string
```

- *Type:* *string

Indicates the frequency with which to poll the third-party API. Must be in the format `1h` or `30m`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/zero_trust_device_posture_integration#interval ZeroTrustDevicePostureIntegration#interval}

---

### ZeroTrustDevicePostureIntegrationConfigA <a name="ZeroTrustDevicePostureIntegrationConfigA" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigA"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigA.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/zerotrustdevicepostureintegration"

&zerotrustdevicepostureintegration.ZeroTrustDevicePostureIntegrationConfigA {
	AccessClientId: *string,
	AccessClientSecret: *string,
	ApiUrl: *string,
	AuthUrl: *string,
	ClientId: *string,
	ClientKey: *string,
	ClientSecret: *string,
	CustomerId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigA.property.accessClientId">AccessClientId</a></code> | <code>*string</code> | The Access client ID to be used as the `Cf-Access-Client-ID` header when making a request to the `api_url`. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigA.property.accessClientSecret">AccessClientSecret</a></code> | <code>*string</code> | The Access client secret to be used as the `Cf-Access-Client-Secret` header when making a request to the `api_url`. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigA.property.apiUrl">ApiUrl</a></code> | <code>*string</code> | The third-party API's URL. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigA.property.authUrl">AuthUrl</a></code> | <code>*string</code> | The third-party authorization API URL. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigA.property.clientId">ClientId</a></code> | <code>*string</code> | The client identifier for authenticating API calls. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigA.property.clientKey">ClientKey</a></code> | <code>*string</code> | The client key for authenticating API calls. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigA.property.clientSecret">ClientSecret</a></code> | <code>*string</code> | The client secret for authenticating API calls. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigA.property.customerId">CustomerId</a></code> | <code>*string</code> | The customer identifier for authenticating API calls. |

---

##### `AccessClientId`<sup>Optional</sup> <a name="AccessClientId" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigA.property.accessClientId"></a>

```go
AccessClientId *string
```

- *Type:* *string

The Access client ID to be used as the `Cf-Access-Client-ID` header when making a request to the `api_url`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/zero_trust_device_posture_integration#access_client_id ZeroTrustDevicePostureIntegration#access_client_id}

---

##### `AccessClientSecret`<sup>Optional</sup> <a name="AccessClientSecret" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigA.property.accessClientSecret"></a>

```go
AccessClientSecret *string
```

- *Type:* *string

The Access client secret to be used as the `Cf-Access-Client-Secret` header when making a request to the `api_url`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/zero_trust_device_posture_integration#access_client_secret ZeroTrustDevicePostureIntegration#access_client_secret}

---

##### `ApiUrl`<sup>Optional</sup> <a name="ApiUrl" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigA.property.apiUrl"></a>

```go
ApiUrl *string
```

- *Type:* *string

The third-party API's URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/zero_trust_device_posture_integration#api_url ZeroTrustDevicePostureIntegration#api_url}

---

##### `AuthUrl`<sup>Optional</sup> <a name="AuthUrl" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigA.property.authUrl"></a>

```go
AuthUrl *string
```

- *Type:* *string

The third-party authorization API URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/zero_trust_device_posture_integration#auth_url ZeroTrustDevicePostureIntegration#auth_url}

---

##### `ClientId`<sup>Optional</sup> <a name="ClientId" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigA.property.clientId"></a>

```go
ClientId *string
```

- *Type:* *string

The client identifier for authenticating API calls.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/zero_trust_device_posture_integration#client_id ZeroTrustDevicePostureIntegration#client_id}

---

##### `ClientKey`<sup>Optional</sup> <a name="ClientKey" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigA.property.clientKey"></a>

```go
ClientKey *string
```

- *Type:* *string

The client key for authenticating API calls.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/zero_trust_device_posture_integration#client_key ZeroTrustDevicePostureIntegration#client_key}

---

##### `ClientSecret`<sup>Optional</sup> <a name="ClientSecret" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigA.property.clientSecret"></a>

```go
ClientSecret *string
```

- *Type:* *string

The client secret for authenticating API calls.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/zero_trust_device_posture_integration#client_secret ZeroTrustDevicePostureIntegration#client_secret}

---

##### `CustomerId`<sup>Optional</sup> <a name="CustomerId" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigA.property.customerId"></a>

```go
CustomerId *string
```

- *Type:* *string

The customer identifier for authenticating API calls.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/zero_trust_device_posture_integration#customer_id ZeroTrustDevicePostureIntegration#customer_id}

---

## Classes <a name="Classes" id="Classes"></a>

### ZeroTrustDevicePostureIntegrationConfigAList <a name="ZeroTrustDevicePostureIntegrationConfigAList" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigAList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigAList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/zerotrustdevicepostureintegration"

zerotrustdevicepostureintegration.NewZeroTrustDevicePostureIntegrationConfigAList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ZeroTrustDevicePostureIntegrationConfigAList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigAList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigAList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigAList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigAList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigAList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigAList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigAList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigAList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigAList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigAList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigAList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigAList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigAList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigAList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigAList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigAList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigAList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigAList.get"></a>

```go
func Get(index *f64) ZeroTrustDevicePostureIntegrationConfigAOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigAList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigAList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigAList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigAList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigAList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigAList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigAList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ZeroTrustDevicePostureIntegrationConfigAOutputReference <a name="ZeroTrustDevicePostureIntegrationConfigAOutputReference" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigAOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigAOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/zerotrustdevicepostureintegration"

zerotrustdevicepostureintegration.NewZeroTrustDevicePostureIntegrationConfigAOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ZeroTrustDevicePostureIntegrationConfigAOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigAOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigAOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigAOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigAOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigAOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigAOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigAOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigAOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigAOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigAOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigAOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigAOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigAOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigAOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigAOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigAOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigAOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigAOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigAOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigAOutputReference.resetAccessClientId">ResetAccessClientId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigAOutputReference.resetAccessClientSecret">ResetAccessClientSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigAOutputReference.resetApiUrl">ResetApiUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigAOutputReference.resetAuthUrl">ResetAuthUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigAOutputReference.resetClientId">ResetClientId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigAOutputReference.resetClientKey">ResetClientKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigAOutputReference.resetClientSecret">ResetClientSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigAOutputReference.resetCustomerId">ResetCustomerId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigAOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigAOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigAOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigAOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigAOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigAOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigAOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigAOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigAOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigAOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigAOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigAOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigAOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigAOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAccessClientId` <a name="ResetAccessClientId" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigAOutputReference.resetAccessClientId"></a>

```go
func ResetAccessClientId()
```

##### `ResetAccessClientSecret` <a name="ResetAccessClientSecret" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigAOutputReference.resetAccessClientSecret"></a>

```go
func ResetAccessClientSecret()
```

##### `ResetApiUrl` <a name="ResetApiUrl" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigAOutputReference.resetApiUrl"></a>

```go
func ResetApiUrl()
```

##### `ResetAuthUrl` <a name="ResetAuthUrl" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigAOutputReference.resetAuthUrl"></a>

```go
func ResetAuthUrl()
```

##### `ResetClientId` <a name="ResetClientId" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigAOutputReference.resetClientId"></a>

```go
func ResetClientId()
```

##### `ResetClientKey` <a name="ResetClientKey" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigAOutputReference.resetClientKey"></a>

```go
func ResetClientKey()
```

##### `ResetClientSecret` <a name="ResetClientSecret" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigAOutputReference.resetClientSecret"></a>

```go
func ResetClientSecret()
```

##### `ResetCustomerId` <a name="ResetCustomerId" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigAOutputReference.resetCustomerId"></a>

```go
func ResetCustomerId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigAOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigAOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigAOutputReference.property.accessClientIdInput">AccessClientIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigAOutputReference.property.accessClientSecretInput">AccessClientSecretInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigAOutputReference.property.apiUrlInput">ApiUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigAOutputReference.property.authUrlInput">AuthUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigAOutputReference.property.clientIdInput">ClientIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigAOutputReference.property.clientKeyInput">ClientKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigAOutputReference.property.clientSecretInput">ClientSecretInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigAOutputReference.property.customerIdInput">CustomerIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigAOutputReference.property.accessClientId">AccessClientId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigAOutputReference.property.accessClientSecret">AccessClientSecret</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigAOutputReference.property.apiUrl">ApiUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigAOutputReference.property.authUrl">AuthUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigAOutputReference.property.clientId">ClientId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigAOutputReference.property.clientKey">ClientKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigAOutputReference.property.clientSecret">ClientSecret</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigAOutputReference.property.customerId">CustomerId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigAOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigAOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigAOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AccessClientIdInput`<sup>Optional</sup> <a name="AccessClientIdInput" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigAOutputReference.property.accessClientIdInput"></a>

```go
func AccessClientIdInput() *string
```

- *Type:* *string

---

##### `AccessClientSecretInput`<sup>Optional</sup> <a name="AccessClientSecretInput" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigAOutputReference.property.accessClientSecretInput"></a>

```go
func AccessClientSecretInput() *string
```

- *Type:* *string

---

##### `ApiUrlInput`<sup>Optional</sup> <a name="ApiUrlInput" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigAOutputReference.property.apiUrlInput"></a>

```go
func ApiUrlInput() *string
```

- *Type:* *string

---

##### `AuthUrlInput`<sup>Optional</sup> <a name="AuthUrlInput" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigAOutputReference.property.authUrlInput"></a>

```go
func AuthUrlInput() *string
```

- *Type:* *string

---

##### `ClientIdInput`<sup>Optional</sup> <a name="ClientIdInput" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigAOutputReference.property.clientIdInput"></a>

```go
func ClientIdInput() *string
```

- *Type:* *string

---

##### `ClientKeyInput`<sup>Optional</sup> <a name="ClientKeyInput" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigAOutputReference.property.clientKeyInput"></a>

```go
func ClientKeyInput() *string
```

- *Type:* *string

---

##### `ClientSecretInput`<sup>Optional</sup> <a name="ClientSecretInput" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigAOutputReference.property.clientSecretInput"></a>

```go
func ClientSecretInput() *string
```

- *Type:* *string

---

##### `CustomerIdInput`<sup>Optional</sup> <a name="CustomerIdInput" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigAOutputReference.property.customerIdInput"></a>

```go
func CustomerIdInput() *string
```

- *Type:* *string

---

##### `AccessClientId`<sup>Required</sup> <a name="AccessClientId" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigAOutputReference.property.accessClientId"></a>

```go
func AccessClientId() *string
```

- *Type:* *string

---

##### `AccessClientSecret`<sup>Required</sup> <a name="AccessClientSecret" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigAOutputReference.property.accessClientSecret"></a>

```go
func AccessClientSecret() *string
```

- *Type:* *string

---

##### `ApiUrl`<sup>Required</sup> <a name="ApiUrl" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigAOutputReference.property.apiUrl"></a>

```go
func ApiUrl() *string
```

- *Type:* *string

---

##### `AuthUrl`<sup>Required</sup> <a name="AuthUrl" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigAOutputReference.property.authUrl"></a>

```go
func AuthUrl() *string
```

- *Type:* *string

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigAOutputReference.property.clientId"></a>

```go
func ClientId() *string
```

- *Type:* *string

---

##### `ClientKey`<sup>Required</sup> <a name="ClientKey" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigAOutputReference.property.clientKey"></a>

```go
func ClientKey() *string
```

- *Type:* *string

---

##### `ClientSecret`<sup>Required</sup> <a name="ClientSecret" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigAOutputReference.property.clientSecret"></a>

```go
func ClientSecret() *string
```

- *Type:* *string

---

##### `CustomerId`<sup>Required</sup> <a name="CustomerId" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigAOutputReference.property.customerId"></a>

```go
func CustomerId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigAOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



