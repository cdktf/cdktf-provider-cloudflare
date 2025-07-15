# `dnsZoneTransfersOutgoing` Submodule <a name="`dnsZoneTransfersOutgoing` Submodule" id="@cdktf/provider-cloudflare.dnsZoneTransfersOutgoing"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DnsZoneTransfersOutgoing <a name="DnsZoneTransfersOutgoing" id="@cdktf/provider-cloudflare.dnsZoneTransfersOutgoing.DnsZoneTransfersOutgoing"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/dns_zone_transfers_outgoing cloudflare_dns_zone_transfers_outgoing}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dnsZoneTransfersOutgoing.DnsZoneTransfersOutgoing.Initializer"></a>

```typescript
import { dnsZoneTransfersOutgoing } from '@cdktf/provider-cloudflare'

new dnsZoneTransfersOutgoing.DnsZoneTransfersOutgoing(scope: Construct, id: string, config: DnsZoneTransfersOutgoingConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersOutgoing.DnsZoneTransfersOutgoing.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersOutgoing.DnsZoneTransfersOutgoing.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersOutgoing.DnsZoneTransfersOutgoing.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersOutgoing.DnsZoneTransfersOutgoingConfig">DnsZoneTransfersOutgoingConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dnsZoneTransfersOutgoing.DnsZoneTransfersOutgoing.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dnsZoneTransfersOutgoing.DnsZoneTransfersOutgoing.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-cloudflare.dnsZoneTransfersOutgoing.DnsZoneTransfersOutgoing.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.dnsZoneTransfersOutgoing.DnsZoneTransfersOutgoingConfig">DnsZoneTransfersOutgoingConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersOutgoing.DnsZoneTransfersOutgoing.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersOutgoing.DnsZoneTransfersOutgoing.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersOutgoing.DnsZoneTransfersOutgoing.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersOutgoing.DnsZoneTransfersOutgoing.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersOutgoing.DnsZoneTransfersOutgoing.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersOutgoing.DnsZoneTransfersOutgoing.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersOutgoing.DnsZoneTransfersOutgoing.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersOutgoing.DnsZoneTransfersOutgoing.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersOutgoing.DnsZoneTransfersOutgoing.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersOutgoing.DnsZoneTransfersOutgoing.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersOutgoing.DnsZoneTransfersOutgoing.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersOutgoing.DnsZoneTransfersOutgoing.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersOutgoing.DnsZoneTransfersOutgoing.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersOutgoing.DnsZoneTransfersOutgoing.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersOutgoing.DnsZoneTransfersOutgoing.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersOutgoing.DnsZoneTransfersOutgoing.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersOutgoing.DnsZoneTransfersOutgoing.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersOutgoing.DnsZoneTransfersOutgoing.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersOutgoing.DnsZoneTransfersOutgoing.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersOutgoing.DnsZoneTransfersOutgoing.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersOutgoing.DnsZoneTransfersOutgoing.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersOutgoing.DnsZoneTransfersOutgoing.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersOutgoing.DnsZoneTransfersOutgoing.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dnsZoneTransfersOutgoing.DnsZoneTransfersOutgoing.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-cloudflare.dnsZoneTransfersOutgoing.DnsZoneTransfersOutgoing.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.dnsZoneTransfersOutgoing.DnsZoneTransfersOutgoing.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dnsZoneTransfersOutgoing.DnsZoneTransfersOutgoing.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-cloudflare.dnsZoneTransfersOutgoing.DnsZoneTransfersOutgoing.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.dnsZoneTransfersOutgoing.DnsZoneTransfersOutgoing.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-cloudflare.dnsZoneTransfersOutgoing.DnsZoneTransfersOutgoing.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-cloudflare.dnsZoneTransfersOutgoing.DnsZoneTransfersOutgoing.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-cloudflare.dnsZoneTransfersOutgoing.DnsZoneTransfersOutgoing.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-cloudflare.dnsZoneTransfersOutgoing.DnsZoneTransfersOutgoing.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-cloudflare.dnsZoneTransfersOutgoing.DnsZoneTransfersOutgoing.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.dnsZoneTransfersOutgoing.DnsZoneTransfersOutgoing.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dnsZoneTransfersOutgoing.DnsZoneTransfersOutgoing.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dnsZoneTransfersOutgoing.DnsZoneTransfersOutgoing.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dnsZoneTransfersOutgoing.DnsZoneTransfersOutgoing.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dnsZoneTransfersOutgoing.DnsZoneTransfersOutgoing.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dnsZoneTransfersOutgoing.DnsZoneTransfersOutgoing.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dnsZoneTransfersOutgoing.DnsZoneTransfersOutgoing.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dnsZoneTransfersOutgoing.DnsZoneTransfersOutgoing.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dnsZoneTransfersOutgoing.DnsZoneTransfersOutgoing.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dnsZoneTransfersOutgoing.DnsZoneTransfersOutgoing.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dnsZoneTransfersOutgoing.DnsZoneTransfersOutgoing.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dnsZoneTransfersOutgoing.DnsZoneTransfersOutgoing.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dnsZoneTransfersOutgoing.DnsZoneTransfersOutgoing.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dnsZoneTransfersOutgoing.DnsZoneTransfersOutgoing.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dnsZoneTransfersOutgoing.DnsZoneTransfersOutgoing.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dnsZoneTransfersOutgoing.DnsZoneTransfersOutgoing.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dnsZoneTransfersOutgoing.DnsZoneTransfersOutgoing.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dnsZoneTransfersOutgoing.DnsZoneTransfersOutgoing.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dnsZoneTransfersOutgoing.DnsZoneTransfersOutgoing.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-cloudflare.dnsZoneTransfersOutgoing.DnsZoneTransfersOutgoing.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-cloudflare.dnsZoneTransfersOutgoing.DnsZoneTransfersOutgoing.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dnsZoneTransfersOutgoing.DnsZoneTransfersOutgoing.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dnsZoneTransfersOutgoing.DnsZoneTransfersOutgoing.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dnsZoneTransfersOutgoing.DnsZoneTransfersOutgoing.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dnsZoneTransfersOutgoing.DnsZoneTransfersOutgoing.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-cloudflare.dnsZoneTransfersOutgoing.DnsZoneTransfersOutgoing.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dnsZoneTransfersOutgoing.DnsZoneTransfersOutgoing.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-cloudflare.dnsZoneTransfersOutgoing.DnsZoneTransfersOutgoing.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.dnsZoneTransfersOutgoing.DnsZoneTransfersOutgoing.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-cloudflare.dnsZoneTransfersOutgoing.DnsZoneTransfersOutgoing.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-cloudflare.dnsZoneTransfersOutgoing.DnsZoneTransfersOutgoing.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dnsZoneTransfersOutgoing.DnsZoneTransfersOutgoing.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersOutgoing.DnsZoneTransfersOutgoing.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersOutgoing.DnsZoneTransfersOutgoing.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersOutgoing.DnsZoneTransfersOutgoing.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersOutgoing.DnsZoneTransfersOutgoing.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DnsZoneTransfersOutgoing resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-cloudflare.dnsZoneTransfersOutgoing.DnsZoneTransfersOutgoing.isConstruct"></a>

```typescript
import { dnsZoneTransfersOutgoing } from '@cdktf/provider-cloudflare'

dnsZoneTransfersOutgoing.DnsZoneTransfersOutgoing.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dnsZoneTransfersOutgoing.DnsZoneTransfersOutgoing.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-cloudflare.dnsZoneTransfersOutgoing.DnsZoneTransfersOutgoing.isTerraformElement"></a>

```typescript
import { dnsZoneTransfersOutgoing } from '@cdktf/provider-cloudflare'

dnsZoneTransfersOutgoing.DnsZoneTransfersOutgoing.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dnsZoneTransfersOutgoing.DnsZoneTransfersOutgoing.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-cloudflare.dnsZoneTransfersOutgoing.DnsZoneTransfersOutgoing.isTerraformResource"></a>

```typescript
import { dnsZoneTransfersOutgoing } from '@cdktf/provider-cloudflare'

dnsZoneTransfersOutgoing.DnsZoneTransfersOutgoing.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dnsZoneTransfersOutgoing.DnsZoneTransfersOutgoing.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-cloudflare.dnsZoneTransfersOutgoing.DnsZoneTransfersOutgoing.generateConfigForImport"></a>

```typescript
import { dnsZoneTransfersOutgoing } from '@cdktf/provider-cloudflare'

dnsZoneTransfersOutgoing.DnsZoneTransfersOutgoing.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DnsZoneTransfersOutgoing resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dnsZoneTransfersOutgoing.DnsZoneTransfersOutgoing.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.dnsZoneTransfersOutgoing.DnsZoneTransfersOutgoing.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DnsZoneTransfersOutgoing to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.dnsZoneTransfersOutgoing.DnsZoneTransfersOutgoing.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DnsZoneTransfersOutgoing that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/dns_zone_transfers_outgoing#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dnsZoneTransfersOutgoing.DnsZoneTransfersOutgoing.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DnsZoneTransfersOutgoing to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersOutgoing.DnsZoneTransfersOutgoing.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersOutgoing.DnsZoneTransfersOutgoing.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersOutgoing.DnsZoneTransfersOutgoing.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersOutgoing.DnsZoneTransfersOutgoing.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersOutgoing.DnsZoneTransfersOutgoing.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersOutgoing.DnsZoneTransfersOutgoing.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersOutgoing.DnsZoneTransfersOutgoing.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersOutgoing.DnsZoneTransfersOutgoing.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersOutgoing.DnsZoneTransfersOutgoing.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersOutgoing.DnsZoneTransfersOutgoing.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersOutgoing.DnsZoneTransfersOutgoing.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersOutgoing.DnsZoneTransfersOutgoing.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersOutgoing.DnsZoneTransfersOutgoing.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersOutgoing.DnsZoneTransfersOutgoing.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersOutgoing.DnsZoneTransfersOutgoing.property.checkedTime">checkedTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersOutgoing.DnsZoneTransfersOutgoing.property.createdTime">createdTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersOutgoing.DnsZoneTransfersOutgoing.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersOutgoing.DnsZoneTransfersOutgoing.property.lastTransferredTime">lastTransferredTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersOutgoing.DnsZoneTransfersOutgoing.property.soaSerial">soaSerial</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersOutgoing.DnsZoneTransfersOutgoing.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersOutgoing.DnsZoneTransfersOutgoing.property.peersInput">peersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersOutgoing.DnsZoneTransfersOutgoing.property.zoneIdInput">zoneIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersOutgoing.DnsZoneTransfersOutgoing.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersOutgoing.DnsZoneTransfersOutgoing.property.peers">peers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersOutgoing.DnsZoneTransfersOutgoing.property.zoneId">zoneId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.dnsZoneTransfersOutgoing.DnsZoneTransfersOutgoing.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-cloudflare.dnsZoneTransfersOutgoing.DnsZoneTransfersOutgoing.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dnsZoneTransfersOutgoing.DnsZoneTransfersOutgoing.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-cloudflare.dnsZoneTransfersOutgoing.DnsZoneTransfersOutgoing.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-cloudflare.dnsZoneTransfersOutgoing.DnsZoneTransfersOutgoing.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-cloudflare.dnsZoneTransfersOutgoing.DnsZoneTransfersOutgoing.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-cloudflare.dnsZoneTransfersOutgoing.DnsZoneTransfersOutgoing.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.dnsZoneTransfersOutgoing.DnsZoneTransfersOutgoing.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dnsZoneTransfersOutgoing.DnsZoneTransfersOutgoing.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.dnsZoneTransfersOutgoing.DnsZoneTransfersOutgoing.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.dnsZoneTransfersOutgoing.DnsZoneTransfersOutgoing.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dnsZoneTransfersOutgoing.DnsZoneTransfersOutgoing.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dnsZoneTransfersOutgoing.DnsZoneTransfersOutgoing.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.dnsZoneTransfersOutgoing.DnsZoneTransfersOutgoing.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `checkedTime`<sup>Required</sup> <a name="checkedTime" id="@cdktf/provider-cloudflare.dnsZoneTransfersOutgoing.DnsZoneTransfersOutgoing.property.checkedTime"></a>

```typescript
public readonly checkedTime: string;
```

- *Type:* string

---

##### `createdTime`<sup>Required</sup> <a name="createdTime" id="@cdktf/provider-cloudflare.dnsZoneTransfersOutgoing.DnsZoneTransfersOutgoing.property.createdTime"></a>

```typescript
public readonly createdTime: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dnsZoneTransfersOutgoing.DnsZoneTransfersOutgoing.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `lastTransferredTime`<sup>Required</sup> <a name="lastTransferredTime" id="@cdktf/provider-cloudflare.dnsZoneTransfersOutgoing.DnsZoneTransfersOutgoing.property.lastTransferredTime"></a>

```typescript
public readonly lastTransferredTime: string;
```

- *Type:* string

---

##### `soaSerial`<sup>Required</sup> <a name="soaSerial" id="@cdktf/provider-cloudflare.dnsZoneTransfersOutgoing.DnsZoneTransfersOutgoing.property.soaSerial"></a>

```typescript
public readonly soaSerial: number;
```

- *Type:* number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-cloudflare.dnsZoneTransfersOutgoing.DnsZoneTransfersOutgoing.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `peersInput`<sup>Optional</sup> <a name="peersInput" id="@cdktf/provider-cloudflare.dnsZoneTransfersOutgoing.DnsZoneTransfersOutgoing.property.peersInput"></a>

```typescript
public readonly peersInput: string[];
```

- *Type:* string[]

---

##### `zoneIdInput`<sup>Optional</sup> <a name="zoneIdInput" id="@cdktf/provider-cloudflare.dnsZoneTransfersOutgoing.DnsZoneTransfersOutgoing.property.zoneIdInput"></a>

```typescript
public readonly zoneIdInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.dnsZoneTransfersOutgoing.DnsZoneTransfersOutgoing.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `peers`<sup>Required</sup> <a name="peers" id="@cdktf/provider-cloudflare.dnsZoneTransfersOutgoing.DnsZoneTransfersOutgoing.property.peers"></a>

```typescript
public readonly peers: string[];
```

- *Type:* string[]

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktf/provider-cloudflare.dnsZoneTransfersOutgoing.DnsZoneTransfersOutgoing.property.zoneId"></a>

```typescript
public readonly zoneId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersOutgoing.DnsZoneTransfersOutgoing.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.dnsZoneTransfersOutgoing.DnsZoneTransfersOutgoing.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DnsZoneTransfersOutgoingConfig <a name="DnsZoneTransfersOutgoingConfig" id="@cdktf/provider-cloudflare.dnsZoneTransfersOutgoing.DnsZoneTransfersOutgoingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dnsZoneTransfersOutgoing.DnsZoneTransfersOutgoingConfig.Initializer"></a>

```typescript
import { dnsZoneTransfersOutgoing } from '@cdktf/provider-cloudflare'

const dnsZoneTransfersOutgoingConfig: dnsZoneTransfersOutgoing.DnsZoneTransfersOutgoingConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersOutgoing.DnsZoneTransfersOutgoingConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersOutgoing.DnsZoneTransfersOutgoingConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersOutgoing.DnsZoneTransfersOutgoingConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersOutgoing.DnsZoneTransfersOutgoingConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersOutgoing.DnsZoneTransfersOutgoingConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersOutgoing.DnsZoneTransfersOutgoingConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersOutgoing.DnsZoneTransfersOutgoingConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersOutgoing.DnsZoneTransfersOutgoingConfig.property.name">name</a></code> | <code>string</code> | Zone name. |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersOutgoing.DnsZoneTransfersOutgoingConfig.property.peers">peers</a></code> | <code>string[]</code> | A list of peer tags. |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersOutgoing.DnsZoneTransfersOutgoingConfig.property.zoneId">zoneId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/dns_zone_transfers_outgoing#zone_id DnsZoneTransfersOutgoing#zone_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.dnsZoneTransfersOutgoing.DnsZoneTransfersOutgoingConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dnsZoneTransfersOutgoing.DnsZoneTransfersOutgoingConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.dnsZoneTransfersOutgoing.DnsZoneTransfersOutgoingConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.dnsZoneTransfersOutgoing.DnsZoneTransfersOutgoingConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dnsZoneTransfersOutgoing.DnsZoneTransfersOutgoingConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dnsZoneTransfersOutgoing.DnsZoneTransfersOutgoingConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.dnsZoneTransfersOutgoing.DnsZoneTransfersOutgoingConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.dnsZoneTransfersOutgoing.DnsZoneTransfersOutgoingConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Zone name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/dns_zone_transfers_outgoing#name DnsZoneTransfersOutgoing#name}

---

##### `peers`<sup>Required</sup> <a name="peers" id="@cdktf/provider-cloudflare.dnsZoneTransfersOutgoing.DnsZoneTransfersOutgoingConfig.property.peers"></a>

```typescript
public readonly peers: string[];
```

- *Type:* string[]

A list of peer tags.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/dns_zone_transfers_outgoing#peers DnsZoneTransfersOutgoing#peers}

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktf/provider-cloudflare.dnsZoneTransfersOutgoing.DnsZoneTransfersOutgoingConfig.property.zoneId"></a>

```typescript
public readonly zoneId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/dns_zone_transfers_outgoing#zone_id DnsZoneTransfersOutgoing#zone_id}.

---



