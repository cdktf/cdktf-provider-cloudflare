# `cloudflare_waf_package`

Refer to the Terraform Registory for docs: [`cloudflare_waf_package`](https://www.terraform.io/docs/providers/cloudflare/r/waf_package).

# `wafPackage` Submodule <a name="`wafPackage` Submodule" id="@cdktf/provider-cloudflare.wafPackage"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WafPackage <a name="WafPackage" id="@cdktf/provider-cloudflare.wafPackage.WafPackage"></a>

Represents a {@link https://www.terraform.io/docs/providers/cloudflare/r/waf_package cloudflare_waf_package}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.wafPackage.WafPackage.Initializer"></a>

```typescript
import { wafPackage } from '@cdktf/provider-cloudflare'

new wafPackage.WafPackage(scope: Construct, id: string, config: WafPackageConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.wafPackage.WafPackage.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.wafPackage.WafPackage.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.wafPackage.WafPackage.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-cloudflare.wafPackage.WafPackageConfig">WafPackageConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.wafPackage.WafPackage.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.wafPackage.WafPackage.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-cloudflare.wafPackage.WafPackage.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.wafPackage.WafPackageConfig">WafPackageConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.wafPackage.WafPackage.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.wafPackage.WafPackage.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.wafPackage.WafPackage.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.wafPackage.WafPackage.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.wafPackage.WafPackage.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.wafPackage.WafPackage.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.wafPackage.WafPackage.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.wafPackage.WafPackage.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.wafPackage.WafPackage.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.wafPackage.WafPackage.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.wafPackage.WafPackage.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.wafPackage.WafPackage.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.wafPackage.WafPackage.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.wafPackage.WafPackage.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.wafPackage.WafPackage.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.wafPackage.WafPackage.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.wafPackage.WafPackage.resetActionMode">resetActionMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.wafPackage.WafPackage.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.wafPackage.WafPackage.resetSensitivity">resetSensitivity</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.wafPackage.WafPackage.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-cloudflare.wafPackage.WafPackage.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.wafPackage.WafPackage.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.wafPackage.WafPackage.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-cloudflare.wafPackage.WafPackage.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.wafPackage.WafPackage.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-cloudflare.wafPackage.WafPackage.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-cloudflare.wafPackage.WafPackage.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-cloudflare.wafPackage.WafPackage.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.wafPackage.WafPackage.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.wafPackage.WafPackage.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.wafPackage.WafPackage.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.wafPackage.WafPackage.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.wafPackage.WafPackage.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.wafPackage.WafPackage.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.wafPackage.WafPackage.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.wafPackage.WafPackage.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.wafPackage.WafPackage.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.wafPackage.WafPackage.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.wafPackage.WafPackage.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.wafPackage.WafPackage.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.wafPackage.WafPackage.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.wafPackage.WafPackage.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.wafPackage.WafPackage.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.wafPackage.WafPackage.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.wafPackage.WafPackage.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.wafPackage.WafPackage.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.wafPackage.WafPackage.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.wafPackage.WafPackage.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetActionMode` <a name="resetActionMode" id="@cdktf/provider-cloudflare.wafPackage.WafPackage.resetActionMode"></a>

```typescript
public resetActionMode(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-cloudflare.wafPackage.WafPackage.resetId"></a>

```typescript
public resetId(): void
```

##### `resetSensitivity` <a name="resetSensitivity" id="@cdktf/provider-cloudflare.wafPackage.WafPackage.resetSensitivity"></a>

```typescript
public resetSensitivity(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.wafPackage.WafPackage.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.wafPackage.WafPackage.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.wafPackage.WafPackage.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-cloudflare.wafPackage.WafPackage.isConstruct"></a>

```typescript
import { wafPackage } from '@cdktf/provider-cloudflare'

wafPackage.WafPackage.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.wafPackage.WafPackage.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-cloudflare.wafPackage.WafPackage.isTerraformElement"></a>

```typescript
import { wafPackage } from '@cdktf/provider-cloudflare'

wafPackage.WafPackage.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.wafPackage.WafPackage.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-cloudflare.wafPackage.WafPackage.isTerraformResource"></a>

```typescript
import { wafPackage } from '@cdktf/provider-cloudflare'

wafPackage.WafPackage.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.wafPackage.WafPackage.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.wafPackage.WafPackage.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.wafPackage.WafPackage.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.wafPackage.WafPackage.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.wafPackage.WafPackage.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.wafPackage.WafPackage.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.wafPackage.WafPackage.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.wafPackage.WafPackage.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.wafPackage.WafPackage.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.wafPackage.WafPackage.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.wafPackage.WafPackage.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.wafPackage.WafPackage.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.wafPackage.WafPackage.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.wafPackage.WafPackage.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.wafPackage.WafPackage.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.wafPackage.WafPackage.property.actionModeInput">actionModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.wafPackage.WafPackage.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.wafPackage.WafPackage.property.packageIdInput">packageIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.wafPackage.WafPackage.property.sensitivityInput">sensitivityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.wafPackage.WafPackage.property.zoneIdInput">zoneIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.wafPackage.WafPackage.property.actionMode">actionMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.wafPackage.WafPackage.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.wafPackage.WafPackage.property.packageId">packageId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.wafPackage.WafPackage.property.sensitivity">sensitivity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.wafPackage.WafPackage.property.zoneId">zoneId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.wafPackage.WafPackage.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-cloudflare.wafPackage.WafPackage.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.wafPackage.WafPackage.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-cloudflare.wafPackage.WafPackage.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-cloudflare.wafPackage.WafPackage.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-cloudflare.wafPackage.WafPackage.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-cloudflare.wafPackage.WafPackage.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.wafPackage.WafPackage.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.wafPackage.WafPackage.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.wafPackage.WafPackage.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.wafPackage.WafPackage.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.wafPackage.WafPackage.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.wafPackage.WafPackage.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.wafPackage.WafPackage.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `actionModeInput`<sup>Optional</sup> <a name="actionModeInput" id="@cdktf/provider-cloudflare.wafPackage.WafPackage.property.actionModeInput"></a>

```typescript
public readonly actionModeInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-cloudflare.wafPackage.WafPackage.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `packageIdInput`<sup>Optional</sup> <a name="packageIdInput" id="@cdktf/provider-cloudflare.wafPackage.WafPackage.property.packageIdInput"></a>

```typescript
public readonly packageIdInput: string;
```

- *Type:* string

---

##### `sensitivityInput`<sup>Optional</sup> <a name="sensitivityInput" id="@cdktf/provider-cloudflare.wafPackage.WafPackage.property.sensitivityInput"></a>

```typescript
public readonly sensitivityInput: string;
```

- *Type:* string

---

##### `zoneIdInput`<sup>Optional</sup> <a name="zoneIdInput" id="@cdktf/provider-cloudflare.wafPackage.WafPackage.property.zoneIdInput"></a>

```typescript
public readonly zoneIdInput: string;
```

- *Type:* string

---

##### `actionMode`<sup>Required</sup> <a name="actionMode" id="@cdktf/provider-cloudflare.wafPackage.WafPackage.property.actionMode"></a>

```typescript
public readonly actionMode: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.wafPackage.WafPackage.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `packageId`<sup>Required</sup> <a name="packageId" id="@cdktf/provider-cloudflare.wafPackage.WafPackage.property.packageId"></a>

```typescript
public readonly packageId: string;
```

- *Type:* string

---

##### `sensitivity`<sup>Required</sup> <a name="sensitivity" id="@cdktf/provider-cloudflare.wafPackage.WafPackage.property.sensitivity"></a>

```typescript
public readonly sensitivity: string;
```

- *Type:* string

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktf/provider-cloudflare.wafPackage.WafPackage.property.zoneId"></a>

```typescript
public readonly zoneId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.wafPackage.WafPackage.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.wafPackage.WafPackage.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### WafPackageConfig <a name="WafPackageConfig" id="@cdktf/provider-cloudflare.wafPackage.WafPackageConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.wafPackage.WafPackageConfig.Initializer"></a>

```typescript
import { wafPackage } from '@cdktf/provider-cloudflare'

const wafPackageConfig: wafPackage.WafPackageConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.wafPackage.WafPackageConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.wafPackage.WafPackageConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.wafPackage.WafPackageConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.wafPackage.WafPackageConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.wafPackage.WafPackageConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.wafPackage.WafPackageConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.wafPackage.WafPackageConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.wafPackage.WafPackageConfig.property.packageId">packageId</a></code> | <code>string</code> | **Modifying this attribute will force creation of a new resource.**. |
| <code><a href="#@cdktf/provider-cloudflare.wafPackage.WafPackageConfig.property.zoneId">zoneId</a></code> | <code>string</code> | The zone identifier to target for the resource. **Modifying this attribute will force creation of a new resource.**. |
| <code><a href="#@cdktf/provider-cloudflare.wafPackage.WafPackageConfig.property.actionMode">actionMode</a></code> | <code>string</code> | Defaults to `challenge`. |
| <code><a href="#@cdktf/provider-cloudflare.wafPackage.WafPackageConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/waf_package#id WafPackage#id}. |
| <code><a href="#@cdktf/provider-cloudflare.wafPackage.WafPackageConfig.property.sensitivity">sensitivity</a></code> | <code>string</code> | Defaults to `high`. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.wafPackage.WafPackageConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.wafPackage.WafPackageConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.wafPackage.WafPackageConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.wafPackage.WafPackageConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.wafPackage.WafPackageConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.wafPackage.WafPackageConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.wafPackage.WafPackageConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `packageId`<sup>Required</sup> <a name="packageId" id="@cdktf/provider-cloudflare.wafPackage.WafPackageConfig.property.packageId"></a>

```typescript
public readonly packageId: string;
```

- *Type:* string

**Modifying this attribute will force creation of a new resource.**.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/waf_package#package_id WafPackage#package_id}

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktf/provider-cloudflare.wafPackage.WafPackageConfig.property.zoneId"></a>

```typescript
public readonly zoneId: string;
```

- *Type:* string

The zone identifier to target for the resource. **Modifying this attribute will force creation of a new resource.**.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/waf_package#zone_id WafPackage#zone_id}

---

##### `actionMode`<sup>Optional</sup> <a name="actionMode" id="@cdktf/provider-cloudflare.wafPackage.WafPackageConfig.property.actionMode"></a>

```typescript
public readonly actionMode: string;
```

- *Type:* string

Defaults to `challenge`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/waf_package#action_mode WafPackage#action_mode}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-cloudflare.wafPackage.WafPackageConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/waf_package#id WafPackage#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `sensitivity`<sup>Optional</sup> <a name="sensitivity" id="@cdktf/provider-cloudflare.wafPackage.WafPackageConfig.property.sensitivity"></a>

```typescript
public readonly sensitivity: string;
```

- *Type:* string

Defaults to `high`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/waf_package#sensitivity WafPackage#sensitivity}

---



