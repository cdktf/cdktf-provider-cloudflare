# `authenticatedOriginPulls` Submodule <a name="`authenticatedOriginPulls` Submodule" id="@cdktf/provider-cloudflare.authenticatedOriginPulls"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AuthenticatedOriginPulls <a name="AuthenticatedOriginPulls" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/resources/authenticated_origin_pulls cloudflare_authenticated_origin_pulls}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/authenticatedoriginpulls"

authenticatedoriginpulls.NewAuthenticatedOriginPulls(scope Construct, id *string, config AuthenticatedOriginPullsConfig) AuthenticatedOriginPulls
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfig">AuthenticatedOriginPullsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfig">AuthenticatedOriginPullsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.putConfig">PutConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.resetHostname">ResetHostname</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutConfig` <a name="PutConfig" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.putConfig"></a>

```go
func PutConfig(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.putConfig.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetHostname` <a name="ResetHostname" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.resetHostname"></a>

```go
func ResetHostname()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a AuthenticatedOriginPulls resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/authenticatedoriginpulls"

authenticatedoriginpulls.AuthenticatedOriginPulls_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/authenticatedoriginpulls"

authenticatedoriginpulls.AuthenticatedOriginPulls_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/authenticatedoriginpulls"

authenticatedoriginpulls.AuthenticatedOriginPulls_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/authenticatedoriginpulls"

authenticatedoriginpulls.AuthenticatedOriginPulls_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a AuthenticatedOriginPulls resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the AuthenticatedOriginPulls to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing AuthenticatedOriginPulls that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/resources/authenticated_origin_pulls#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the AuthenticatedOriginPulls to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.property.certId">CertId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.property.certificate">Certificate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.property.certStatus">CertStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.property.certUpdatedAt">CertUpdatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.property.certUploadedOn">CertUploadedOn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.property.config">Config</a></code> | <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigAList">AuthenticatedOriginPullsConfigAList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.property.enabled">Enabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.property.expiresOn">ExpiresOn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.property.issuer">Issuer</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.property.privateKey">PrivateKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.property.serialNumber">SerialNumber</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.property.signature">Signature</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.property.updatedAt">UpdatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.property.configInput">ConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.property.hostnameInput">HostnameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.property.zoneIdInput">ZoneIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.property.hostname">Hostname</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.property.zoneId">ZoneId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CertId`<sup>Required</sup> <a name="CertId" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.property.certId"></a>

```go
func CertId() *string
```

- *Type:* *string

---

##### `Certificate`<sup>Required</sup> <a name="Certificate" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.property.certificate"></a>

```go
func Certificate() *string
```

- *Type:* *string

---

##### `CertStatus`<sup>Required</sup> <a name="CertStatus" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.property.certStatus"></a>

```go
func CertStatus() *string
```

- *Type:* *string

---

##### `CertUpdatedAt`<sup>Required</sup> <a name="CertUpdatedAt" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.property.certUpdatedAt"></a>

```go
func CertUpdatedAt() *string
```

- *Type:* *string

---

##### `CertUploadedOn`<sup>Required</sup> <a name="CertUploadedOn" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.property.certUploadedOn"></a>

```go
func CertUploadedOn() *string
```

- *Type:* *string

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.property.config"></a>

```go
func Config() AuthenticatedOriginPullsConfigAList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigAList">AuthenticatedOriginPullsConfigAList</a>

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.property.enabled"></a>

```go
func Enabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `ExpiresOn`<sup>Required</sup> <a name="ExpiresOn" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.property.expiresOn"></a>

```go
func ExpiresOn() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Issuer`<sup>Required</sup> <a name="Issuer" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.property.issuer"></a>

```go
func Issuer() *string
```

- *Type:* *string

---

##### `PrivateKey`<sup>Required</sup> <a name="PrivateKey" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.property.privateKey"></a>

```go
func PrivateKey() *string
```

- *Type:* *string

---

##### `SerialNumber`<sup>Required</sup> <a name="SerialNumber" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.property.serialNumber"></a>

```go
func SerialNumber() *string
```

- *Type:* *string

---

##### `Signature`<sup>Required</sup> <a name="Signature" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.property.signature"></a>

```go
func Signature() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.property.updatedAt"></a>

```go
func UpdatedAt() *string
```

- *Type:* *string

---

##### `ConfigInput`<sup>Optional</sup> <a name="ConfigInput" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.property.configInput"></a>

```go
func ConfigInput() interface{}
```

- *Type:* interface{}

---

##### `HostnameInput`<sup>Optional</sup> <a name="HostnameInput" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.property.hostnameInput"></a>

```go
func HostnameInput() *string
```

- *Type:* *string

---

##### `ZoneIdInput`<sup>Optional</sup> <a name="ZoneIdInput" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.property.zoneIdInput"></a>

```go
func ZoneIdInput() *string
```

- *Type:* *string

---

##### `Hostname`<sup>Required</sup> <a name="Hostname" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.property.hostname"></a>

```go
func Hostname() *string
```

- *Type:* *string

---

##### `ZoneId`<sup>Required</sup> <a name="ZoneId" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.property.zoneId"></a>

```go
func ZoneId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### AuthenticatedOriginPullsConfig <a name="AuthenticatedOriginPullsConfig" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/authenticatedoriginpulls"

&authenticatedoriginpulls.AuthenticatedOriginPullsConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Config: interface{},
	ZoneId: *string,
	Hostname: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfig.property.config">Config</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/resources/authenticated_origin_pulls#config AuthenticatedOriginPulls#config}. |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfig.property.zoneId">ZoneId</a></code> | <code>*string</code> | Identifier. |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfig.property.hostname">Hostname</a></code> | <code>*string</code> | The hostname on the origin for which the client certificate uploaded will be used. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfig.property.config"></a>

```go
Config interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/resources/authenticated_origin_pulls#config AuthenticatedOriginPulls#config}.

---

##### `ZoneId`<sup>Required</sup> <a name="ZoneId" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfig.property.zoneId"></a>

```go
ZoneId *string
```

- *Type:* *string

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/resources/authenticated_origin_pulls#zone_id AuthenticatedOriginPulls#zone_id}

---

##### `Hostname`<sup>Optional</sup> <a name="Hostname" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfig.property.hostname"></a>

```go
Hostname *string
```

- *Type:* *string

The hostname on the origin for which the client certificate uploaded will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/resources/authenticated_origin_pulls#hostname AuthenticatedOriginPulls#hostname}

---

### AuthenticatedOriginPullsConfigA <a name="AuthenticatedOriginPullsConfigA" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigA"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigA.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/authenticatedoriginpulls"

&authenticatedoriginpulls.AuthenticatedOriginPullsConfigA {
	CertId: *string,
	Enabled: interface{},
	Hostname: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigA.property.certId">CertId</a></code> | <code>*string</code> | Certificate identifier tag. |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigA.property.enabled">Enabled</a></code> | <code>interface{}</code> | Indicates whether hostname-level authenticated origin pulls is enabled. A null value voids the association. |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigA.property.hostname">Hostname</a></code> | <code>*string</code> | The hostname on the origin for which the client certificate uploaded will be used. |

---

##### `CertId`<sup>Optional</sup> <a name="CertId" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigA.property.certId"></a>

```go
CertId *string
```

- *Type:* *string

Certificate identifier tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/resources/authenticated_origin_pulls#cert_id AuthenticatedOriginPulls#cert_id}

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigA.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Indicates whether hostname-level authenticated origin pulls is enabled. A null value voids the association.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/resources/authenticated_origin_pulls#enabled AuthenticatedOriginPulls#enabled}

---

##### `Hostname`<sup>Optional</sup> <a name="Hostname" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigA.property.hostname"></a>

```go
Hostname *string
```

- *Type:* *string

The hostname on the origin for which the client certificate uploaded will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/resources/authenticated_origin_pulls#hostname AuthenticatedOriginPulls#hostname}

---

## Classes <a name="Classes" id="Classes"></a>

### AuthenticatedOriginPullsConfigAList <a name="AuthenticatedOriginPullsConfigAList" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigAList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigAList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/authenticatedoriginpulls"

authenticatedoriginpulls.NewAuthenticatedOriginPullsConfigAList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) AuthenticatedOriginPullsConfigAList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigAList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigAList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigAList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigAList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigAList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigAList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigAList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigAList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigAList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigAList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigAList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigAList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigAList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigAList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigAList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigAList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigAList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigAList.get"></a>

```go
func Get(index *f64) AuthenticatedOriginPullsConfigAOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigAList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigAList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigAList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigAList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigAList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigAList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigAList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AuthenticatedOriginPullsConfigAOutputReference <a name="AuthenticatedOriginPullsConfigAOutputReference" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigAOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigAOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/authenticatedoriginpulls"

authenticatedoriginpulls.NewAuthenticatedOriginPullsConfigAOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) AuthenticatedOriginPullsConfigAOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigAOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigAOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigAOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigAOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigAOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigAOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigAOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigAOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigAOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigAOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigAOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigAOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigAOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigAOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigAOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigAOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigAOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigAOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigAOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigAOutputReference.resetCertId">ResetCertId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigAOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigAOutputReference.resetHostname">ResetHostname</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigAOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigAOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigAOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigAOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigAOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigAOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigAOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigAOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigAOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigAOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigAOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigAOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigAOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigAOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCertId` <a name="ResetCertId" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigAOutputReference.resetCertId"></a>

```go
func ResetCertId()
```

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigAOutputReference.resetEnabled"></a>

```go
func ResetEnabled()
```

##### `ResetHostname` <a name="ResetHostname" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigAOutputReference.resetHostname"></a>

```go
func ResetHostname()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigAOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigAOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigAOutputReference.property.certIdInput">CertIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigAOutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigAOutputReference.property.hostnameInput">HostnameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigAOutputReference.property.certId">CertId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigAOutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigAOutputReference.property.hostname">Hostname</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigAOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigAOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigAOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CertIdInput`<sup>Optional</sup> <a name="CertIdInput" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigAOutputReference.property.certIdInput"></a>

```go
func CertIdInput() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigAOutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `HostnameInput`<sup>Optional</sup> <a name="HostnameInput" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigAOutputReference.property.hostnameInput"></a>

```go
func HostnameInput() *string
```

- *Type:* *string

---

##### `CertId`<sup>Required</sup> <a name="CertId" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigAOutputReference.property.certId"></a>

```go
func CertId() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigAOutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `Hostname`<sup>Required</sup> <a name="Hostname" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigAOutputReference.property.hostname"></a>

```go
func Hostname() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigAOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



